// Search element in array (linear search),1D Arrays

const arr = [10, 20, 30, 40, 50];
const target = 50;

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return console.log(`Element is found index ${i}`);
    }
  }
  return console.log("Element not found");
};

console.log(linearSearch(arr, target));
