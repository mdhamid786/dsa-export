

// Easy,Find missing number in array (1 to n),1D Arrays

const arr = [1, 2, 4, 5]

const findMissingNumber = (arr) => {
  let n = arr.length+1;

  // (n*n+1)/2
  let totalSum = (n*(n+1))/2;
  let actualSum = arr.reduce((a,b)=> a+b,0)


  return totalSum-actualSum
  
}

console.log(findMissingNumber(arr));
