
// 1. Find the Maximum and Minimum element
const arr = [1, 3, 4, 5, 6, 7, 8, 90, 0, 0, 7, 5, 4];

const findMaxMin = (arr) => {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { max, min };
};

console.log(findMaxMin(arr));
