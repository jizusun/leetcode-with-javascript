/*
---
created:
updated:
  -
source:
  -
level:
  -
description:
  -
tags:
  -
solutions:
  -
    - runtime: ms, beats %
    - memory:  MB, beats %
---
*/

// sort an array of integers into ascending order


// References: 
// http://blog.benoitvallon.com/category/sorting-algorithms-in-javascript/
// https://jizusun.github.io/four-semesters-of-cs/#sorting-algorithms
// https://sites.google.com/a/moundsviewschools.org/ap-computer-science/unit-13---searching-sorting

const swap = (arr, index1, index2) => {
  [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ];
};


// best: O(n)
// worst: O(n^2)
// average: O(n^2)

const bubbleSort = nums => {
  const result = nums.slice();
  let swapped;
  do {
    swapped = false;
    for(let i=0; i<result.length-1; i++) {
      if(result[i] > result[i+1]) {
        swap(result, i, i+1);
        swapped = true;
      }
    }
  } while (swapped);
  return result;
};

// best: O(n^2)
// worst: O(n^2)
// average: O(n^2)
const selectionSort = nums => {
  const result = nums.slice();
  for(let i=0; i<result.length-1; i++) {
    let minIndex = i;
    for(let j=i+1; j<result.length; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }
    swap(result, i, minIndex);
  }
  return result;
};

const insertionSort = nums => {
  const result = nums.slice();
  for(let i=1; i<result.length; i++) {
    let possibleIndex = i;
    let temp = result[i];
    while(possibleIndex > 0 && temp < result[possibleIndex - 1] ) {
      result[possibleIndex] = result[possibleIndex - 1];
      possibleIndex--; 
    }
    result[possibleIndex] = temp;
  }
  return result;
};

module.exports = {
  bubbleSort,
  selectionSort, 
  insertionSort
};
