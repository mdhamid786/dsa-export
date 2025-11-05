// Merge two sorted arrays,1D Arrays

const arr1 = [1, 3, 15]
const arr2 =[2, 4, 16]

const mergeSortedArrays = (arr1, arr2) => {
    let combine = [...arr1, ...arr2].sort((a,b)=>a-b)
 
    // combine.sort((a,b)=>a-b)
     
    return combine
}

console.log(mergeSortedArrays(arr1, arr2));
