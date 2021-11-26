import React, { useState, useEffect } from "react";
import { makeStyles, mergeClasses } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const userStyle = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
    border: "2px solid #ff6d5c",
    borderRadius: "5px"
  },
  bar: {
    margin: "1px",
    borderRadius: "3px"
  },
  txt: {
    margin: "0px",
    paddingTop: "5px"
  }
});

const initArray = (min, max, amount) => {
  let arr = [];
  for (let i = 0; i < amount; i++)
    arr.push(Math.floor(Math.random() * max) + min);
  return arr;
};

let cmps = 0;
let keyA = 0;

const MergeSort = props => {
  const classes = userStyle();
  const [masterArr, setArr] = useState(Object.assign([], initArray(1, 100, 20)));
  const [array, setArray] = useState([]);
  const [maxVal, setMaxVal] = useState(0);
  const [sortingIndexA, setSortingIndexA] = useState(0);
  const [sortingIndexB, setSortingIndexB] = useState(0);
  const [sortingIndexC, setSortingIndexC] = useState(0);

  const start = (e) => {
    e.preventDefault();
    setArr(initArray(1, 20, 20));
    setMaxVal(Math.max(...masterArr) + 1);
    let masterCopy = Object.assign([], masterArr);
    setArray(Object.assign([], masterCopy));
    Sort(masterCopy);
  }

  function later(delay) {
    return new Promise(function (resolve) {
      setTimeout(resolve, delay);
    });
  }

  async function partition(arr, left, right, keyB) {
    if (left == right) return;
    let mid = Math.floor((left + right) / 2);
    await partition(arr, left, mid, keyB);
    await partition(arr, mid + 1, right, keyB);
    await merge(arr, left, right, keyB);
  }

  async function merge(arr, left, right, keyB) {
    let mid = Math.floor((left + right) / 2);
    let l = left;
    let r = mid + 1;
    let tmp = [];
    let cnt = 0;
    while (l <= mid && r <= right) {
      tmp.push(arr[l] <= arr[r] ? arr[l++] : arr[r++]);
      cnt++;
    }
    while (l <= mid) tmp.push(arr[l++]);
    while (r <= right) tmp.push(arr[r++]);
    for (let i = 0; i < right - left + 1; i++) {
      await later(50);
      if (keyA != keyB) return;
      if (cnt-- > 0) cmps++;
      setSortingIndexA(left);
      setSortingIndexB(left + i);
      setSortingIndexC(right);
      arr[left + i] = tmp[i];
      setArray(Object.assign([], arr));
    }
    setArray(Object.assign([], arr));
  }

  const Sort = arr => {
    cmps = 0;
    let keyB = ++keyA;
    partition(arr, 0, arr.length - 1, keyB);
  };

  return (
    <>
      <h4 className={classes.txt}>비교 횟수: {cmps}</h4>
      <div className={classes.container}>
        {array.map((value, index) => (
          <div
            className={classes.bar}
            style={{
              background: sortingIndexA === index ? "#ff005c" : sortingIndexB === index ? "#009900" : sortingIndexC === index ? "#ff6d00" : "dodgerblue",
              width: `${100 / array.length}%`,
              height: `${(value * 100) / maxVal}%`
            }}
          />
        ))}
      </div>
      <div>
        <Button variant="outlined" style={{
          width: 100 + "%",
          fontWeight: 'bold'
        }} onClick={start}>합병정렬 시작</Button>
      </div>
    </>
  );
};
export default MergeSort;