import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

// This function from @material-ui/styles help create css
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

// Initializes a random array based on props given
const initArray = (min, max, amount) => {
  let arr = [];
  for (let i = 0; i < amount; i++)
    arr.push(Math.floor(Math.random() * max) + min);
  return arr;
};

let cmps = 0;
let now = 0;
let keyA = 0;

// Main sorting array. Change this for different algorithms.
const SelectionSort = props => {
  // Make our styles first with useStyles()
  const classes = userStyle();
  // useState is used to create "state" variables in function
  // components which have no state.
  // It works like this:
  // const [var, targetMethod] = useState(arg from targetMethod);
  // Object.assign(target, source);
  const [masterArr, setArr] = useState(Object.assign([], initArray(1, 100, 20)));
  // This "array" var will hold the sorted array
  const [array, setArray] = useState([]);
  // Sets maximum value of array used for setting scale of bars.
  const [maxVal, setMaxVal] = useState(0);
  // sortingIndex is used to display bars.
  const [sortingIndexA, setSortingIndexA] = useState(0);
  const [sortingIndexB, setSortingIndexB] = useState(0);
  const [sortingIndexC, setSortingIndexC] = useState(0);

  // Use useEffect() in place of componentDidMount() and
  // componentDidUpdate() to handle "side effects".
  // Side effects are modifications to the DOM that you want to
  // do after updating the DOM (render).

  const start = (e) => {
    e.preventDefault();
    setArr(initArray(1, 20, 20));
    setMaxVal(Math.max(...masterArr) + 1);
    let masterCopy = Object.assign([], masterArr);
    setArray(Object.assign([], masterCopy));
    Sort(masterCopy);
  }

  // Bubblesort algorithm.
  const Sort = arr => {
    cmps = 0;
    now = 0;
    let keyB = ++keyA;
    for (let i = 0; i < arr.length - 1; i++) {
      let idx = i;
      for (let j = i + 1; j < arr.length+1; j++) {
        setTimeout(() => {
          if (keyA != keyB) return;
          if (j === arr.length && i != idx) {
            let tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
            cmps--;
          }else if (arr[j] < arr[idx]) {
            idx = j;
          }
          cmps++;
          setArray(Object.assign([], arr));
          setSortingIndexA(i);
          setSortingIndexB(idx);
          setSortingIndexC(j);
        }, 50 * (now));
        now++;
      }
    }
  };

  return (
    // JSX tag
    <>
      <h4 className={classes.txt}>비교 횟수: {cmps}</h4>
      <div className={classes.container}>
        {/* Maps each element of array with a value and index*/}
        {array.map((value, index) => (
          // Each bar is just a div.
          <div
            className={classes.bar}
            style={{
              background: sortingIndexA === index ? "#ff005c" : sortingIndexB === index ? "#ff6d00" : sortingIndexC === index ? "#ff6d5c" : "dodgerblue",
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
        }} onClick={start}>선택정렬 시작</Button>
      </div>
    </>
  );
};
export default SelectionSort;