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

const QuickSort = props => {
  const classes = userStyle();
  const [masterArr, setArr] = useState(Object.assign([], initArray(1, 100, 50)));
  const [array, setArray] = useState([]);
  const [maxVal, setMaxVal] = useState(0);
  const [sortingIndexA, setSortingIndexA] = useState(0);
  const [sortingIndexB, setSortingIndexB] = useState(0);
  const [sortingIndexC, setSortingIndexC] = useState(0);

  const start = (e) => {
    e.preventDefault();
    setArr(initArray(1, 100, 50));
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
    await later(50);
    if (keyA != keyB) return;
    let mid = Math.floor((left+right) / 2);
    setSortingIndexA(mid);
    let pivot = arr[mid];
    while (left <= right) {
      while (arr[left] < pivot){
        await later(50);
        if (keyA != keyB) return;
        cmps++;
        setSortingIndexB(left);
        left++;
      } 
      while (arr[right] > pivot){
        await later(50);
        if (keyA != keyB) return;
        cmps++;
        setSortingIndexC(right);
        right--;
      }
      if (left <= right) swap(arr, left++, right--, keyB);
      setArray(Object.assign([], arr));
    }
    return left;
  }

  async function qsort(arr, left, right, keyB) {
    if (left >= right) return;
    let mid = await partition(arr, left, right, keyB);
    await qsort(arr, left, mid - 1, keyB);
    await qsort(arr, mid, right, keyB);
  }

  function swap(arr, left, right, keyB) {
    if (keyA != keyB) return;
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
  }

  const Sort = async arr => {
    cmps = 0;
    let keyB = ++keyA;
    await qsort(arr, 0, arr.length - 1, keyB);
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
        }} onClick={start}>퀵정렬 시작</Button>
      </div>
    </>
  );
};
export default QuickSort;