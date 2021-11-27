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

const RadixSort = props => {
  const classes = userStyle();
  const [masterArr, setArr] = useState(Object.assign([], initArray(1, 999, 50)));
  const [array, setArray] = useState([]);
  const [bucket, setBucket] = useState([]);
  const [maxVal, setMaxVal] = useState(0);
  const [sortingIndexA, setSortingIndexA] = useState(0);

  const start = (e) => {
    e.preventDefault();
    setArr(initArray(1, 999, 50));
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
    let keyB = ++keyA;
    const mx = Math.max(...arr);
    let n = arr.length;
    let exp = 1;
    while(mx >= exp) {
      let bucket = [];
      for(let i=0;i<10;i++) bucket.push([]);
      for(let i =0;i<n;i++){
        let num = (Math.floor(arr[i]/exp))%10;
        bucket[num].push(arr[i]);
      }
      exp *= 10;
      let idx = 0;
      for(let i=0;i<10;i++){
        for(let j=0;j<bucket[i].length;j++){
          await later(50);
          if (keyA != keyB) return;
          setSortingIndexA(idx);
          arr[idx++] = bucket[i][j];
          setArray(Object.assign([], arr));
        }
      }
    }
  };

  return (
    <>
      <h4 className={classes.txt}></h4>
      <div className={classes.container}>
        {array.map((value, index) => (
          <div
            className={classes.bar}
            style={{
              background: sortingIndexA === index ? "#ff005c" : "dodgerblue",
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
        }} onClick={start}>기수정렬 시작</Button>
      </div>
    </>
  );
};
export default RadixSort;