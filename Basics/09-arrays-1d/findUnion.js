// Find union of two arrays,1D Arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];



const findUnion = (arr1, arr2) => {
    const combine = [...arr1, ...arr2]
   
    const union =[...new Set(combine)]

    return union
    
}


console.log(findUnion(arr1, arr2));
