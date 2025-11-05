
// 6. Check if array is sorted


const arr = [1, 3, 5, 7, 9];

function isSorted(arr) {
   
  for(let i =0; i<arr.length;  i++) {
    if(arr[i] > arr[i+1]) {
      return false
    }
  }

  return true

}
console.log(isSorted(arr));
