// Easy,Count occurrences of an element,1D Arrays


const arr = [3, 3, 0, 99, -40, 3];


const countOccurrences = () => {
    let count = 0;

    for(let i =0 ; i<arr.length; i++) {
         if(arr[i] === 0) {
            count++
         }
    }
    return count
}

console.log(countOccurrences(arr));
