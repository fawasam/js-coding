const doubledArray = (arr) => {
  console.log(arr);
  const n = arr.length;
  const result = new Array(n);
  let leftProduct = 1;

  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= arr[i]; // Update the left product running total
  }
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= arr[i];
  }

  return result;
};

const input = doubledArray([2, 4, 5, 6]);
console.log(input); // Output: [120,60,48,40]

// const inputWithZero = doubledArray([2, 4, 0, 6]);
// console.log(inputWithZero); // Output: [0, 0, 48, 0]

// const inputMultipleZeros = doubledArray([2, 0, 0, 6]);
// console.log(inputMultipleZeros); // Output: [0, 0, 0, 0]

setTimeout(() => {
  console.log("HI");
});
console.log("HI2");
