const doubledArray = (arr) => {
  // Initialize the product of all elements and the zero count
  let prod = 1;
  let zeroCount = 0;

  // Calculate the total product and count the number of zeros
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      prod *= arr[i];
    } else {
      zeroCount++;
    }
  }

  // Initialize the output array
  const output = new Array(arr.length);

  // Calculate the output array based on the zero count
  if (zeroCount > 1) {
    // If there is more than one zero, all elements will be zero
    for (let i = 0; i < arr.length; i++) {
      output[i] = 0;
    }
  } else if (zeroCount === 1) {
    // If there is exactly one zero, set the element at the zero index to the product of the rest
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        output[i] = prod;
      } else {
        output[i] = 0;
      }
    }
  } else {
    // If there is no zero, calculate the output as usual
    for (let i = 0; i < arr.length; i++) {
      output[i] = prod / arr[i];
    }
  }

  return output;
};

const input = doubledArray([2, 4, 5, 6]);
console.log(input); // Output: [120,60,48,40]

const inputWithZero = doubledArray([2, 4, 0, 6]);
console.log(inputWithZero); // Output: [0, 0, 48, 0]

const inputMultipleZeros = doubledArray([2, 0, 0, 6]);
console.log(inputMultipleZeros); // Output: [0, 0, 0, 0]
