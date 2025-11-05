
// 7. Remove duplicates from sorted array

const arr = [3, 3, 0, 99, -40];


function removeDuplicates(arr) {
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return arr.slice(0, j + 1);
}


console.log(removeDuplicates(arr));
