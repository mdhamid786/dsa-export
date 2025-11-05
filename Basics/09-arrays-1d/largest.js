// Given an array of integers nums, return the value of the largest element in the array

// Examples:
// Input: nums = [3, 3, 6, 1]

// Output: 6

// Explanation: The largest element in array is 6
// Input: nums = [3, 3, 0, 99, -40]

// Output: 99
// Explanation: The largest element in array is 99

const arr = [3, 3, 0, 99, -40];

const findLargest = (arr) => {
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < max) {
      max = arr[i];
    }
  }

  return max;
};
console.log(findLargest(arr));
