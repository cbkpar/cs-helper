import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
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
let now = 0;
let keyA = 0;

const InsertionSort = props => {
  const classes = userStyle();
  const [masterArr, setArr] = useState(Object.assign([], initArray(1, 100, 20)));
  const [array, setArray] = useState([]);
  const [maxVal, setMaxVal] = useState(0);
  const [sortingIndexA, setSortingIndexA] = useState(0);
  const [sortingIndexB, setSortingIndexB] = useState(0);

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

  const Sort = async arr => {
    cmps = 0;
    let keyB = ++keyA;
    for (let i = 1; i < arr.length; i++) {
      let tmp = arr[i];
      let j = i - 1;
      while (j >= 0 && tmp < arr[j]) {
        arr[j + 1] = arr[j];
        await later(50);
        if (keyA != keyB) return;
        cmps++;
        setArray(Object.assign([], arr));
        setSortingIndexA(i);
        setSortingIndexB(j);
        j--;
      }
      arr[j + 1] = tmp;
    }
  };

  return (
    <>
      <h4 className={classes.txt}>비교 횟수: {cmps}</h4>
      <div className={classes.container}>
        {array.map((value, index) => (
          <div
            className={classes.bar}
            style={{
              background: sortingIndexA === index ? "#ff005c" : sortingIndexB === index ? "#ff6d00" : "dodgerblue",
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
        }} onClick={start}>삽입정렬 시작</Button>
      </div>
    </>
  );
};
export default InsertionSort;