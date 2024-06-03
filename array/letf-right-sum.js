// find an element in array such that sum of left array is equal to sum of right array

let arr = [1, 4, 2, 5, 0];

function findPivot(arr, n) {
  for (let i = 1; i < n; i++) {
    let leftSum = 0;
    let righSum = 0;

    for (let j = i; j >= 0; j--) {
      leftSum += arr[j];
    }
    for (let k = i; k < n; k++) {
      righSum += arr[k];
    }
    if (leftSum === righSum) {
      return i;
    }
  }
  return -1;
}

console.log(findPivot(arr, 5));
