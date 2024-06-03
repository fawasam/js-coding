/**
 * Create a MAP
 * find out complement
 *  x+y=target
 *  x=target-y
 *  check for x if it in map return both indecis
 *   else push the value and indecis into it
 *  else []
 */

var twoSum = function (nums, target) {
  const numToIndex = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }
    numToIndex.set(num, i);
  }
  return [];
};

const output = twoSum([2, 11, 15, 0], 9);
console.log(output);
