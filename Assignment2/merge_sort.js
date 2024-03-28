function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

function merge(arr1, arr2) {
  let a = 0, b = 0;
  let res = [];

  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] < arr2[b]) {
      res.push(arr1[a]);
      a++;
    } else {
      res.push(arr2[b]);
      b++;
    }
  }

  while (a < arr1.length) {
    res.push(arr1[a]);
    a++;
  }

  while (b < arr2.length) {
    res.push(arr2[b]);
    b++;
  }

  return res;
  
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));