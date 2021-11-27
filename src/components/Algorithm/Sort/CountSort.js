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

let keyA = 0;

const CountSort = props => {
  const classes = userStyle();
  const [masterArr, setArr] = useState(Object.assign([], initArray(1, 10, 50)));
  const [array, setArray] = useState([]);
  const [count, setCount] = useState([0]);
  const [maxVal, setMaxVal] = useState(0);
  const [sortingIndexA, setSortingIndexA] = useState(0);
  const [sortingIndexB, setSortingIndexB] = useState(-1);

  const start = (e) => {
    e.preventDefault();
    setArr(initArray(1, 10, 50));
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

  const Sort = async arr => {
    setSortingIndexA(-1);
    setSortingIndexB(-1);
    let keyB = ++keyA;
    const mx = Math.max(...arr);
    let n = arr.length;
    let count = [0];
    for (let i = 0; i < mx; i++) count.push(0);
    for (let i = 0; i < n; i++) {
      await later(50);
      if (keyA != keyB) return;
      count[arr[i]]++;
      setCount(Object.assign([], count));
      setSortingIndexA(i);
    }
    let idx = 0;
    for (let i = 1; i <= mx; i++) {
      await later(50);
      if (keyA != keyB) return;
      while (true) {
        if (count[i] <= 0) break;
        await later(50);
        if (keyA != keyB) return;
        setSortingIndexB(idx);
        arr[idx++] = i;
        setArray(Object.assign([], arr));
        count[i]--;
        setCount(Object.assign([], count));
      }
    }
  };

  return (
    <>
      <h4 className={classes.txt}>Count 배열 : {count.map((value, key) => value + ' ')}</h4>
      <div className={classes.container}>
        {array.map((value, index) => (
          <div
            className={classes.bar}
            style={{
              background: sortingIndexA === index ? "#ff005c" : sortingIndexB === index ? "#009900" : "dodgerblue",
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
        }} onClick={start}>계수정렬 시작</Button>
      </div>
    </>
  );
};
export default CountSort;