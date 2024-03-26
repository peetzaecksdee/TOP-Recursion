function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

function merge(arr1, arr2) {
  let res = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      res.push(arr1.shift());
    } else {
      res.push(arr2.shift());
    }
  }
  
  return [...res, ...arr1, ...arr2] // res.concat(arr1).concat(arr2);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));