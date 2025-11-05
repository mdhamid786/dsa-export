// Easy,Find intersection of two arrays,1D Arrays


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];


// Method 1: Using filter() and includes() (simple & easy)


const intersection = (arr1, arr2) => {
     return arr1.filter((num)=> arr2.includes(num))
}

// console.log(intersection(arr1,arr2));


//  Method 2: Using Set (better performance for large arrays)

const intersection2 = (arr1,arr2) => {
    const set2 = new Set(arr2)

    return arr1.filter((num)=> set2.has(num))
}


// console.log(intersection(arr1,arr2));
