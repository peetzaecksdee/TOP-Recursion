function fib(num) {
  let arr = [0, 1];
  
  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr
}

console.log(fib(8));

function fibRec(num, arr = [0, 1]) {
  if (arr.length >= num) return arr;
  return fibRec(num, [...arr, arr[arr.length - 1] + arr[arr.length - 2]])
}

console.log(fibRec(8));