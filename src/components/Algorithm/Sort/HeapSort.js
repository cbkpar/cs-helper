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

const HeapSort = props => {
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

  async function heapify(arr, n, idx, keyB) {
    await later(50);
    if (keyA != keyB) return;
    let t = idx;
    let l = idx * 2 + 1;
    let r = idx * 2 + 2;
    setSortingIndexA(t);
    setSortingIndexB(l);
    setSortingIndexC(r);
    cmps++;
    if (l < n && arr[t] < arr[l]) t = l;
    if (r < n && arr[t] < arr[r]) t = r;
    if (t == idx) return;
    await swap(arr, t, idx, keyB);
    await heapify(arr, n, t, keyB);
    setArray(Object.assign([], arr));
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
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) await heapify(arr, n, i, keyB);
    for (let i = n - 1; i > 0; i--) {
      await swap(arr, 0, i, keyB);
      await heapify(arr, i, 0, keyB);
    }

    setArray(Object.assign([], arr));
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
        }} onClick={start}>힙정렬 시작</Button>
      </div>
    </>
  );
};
export default HeapSort;