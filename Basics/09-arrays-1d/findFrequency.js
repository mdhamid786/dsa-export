// You have an array of numbers (or strings), and you need to find how many times each element appears in that array.
// ,Find frequency of each element,1D Arrays


const arr = [1, 2, 2, 3, 3, 3];


const findFrequency = (arr) => {
    let freq = {};

    for(let i=0; i<arr.length; i++) {
       let num = arr[i]
       if(freq[num]) {
          freq[num]++;
       } el
    }
    return freq
}

console.log(findFrequency(arr));
