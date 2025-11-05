// 2. Sum of all elements


const arr = [2,4,5,6,7,8,90]

const sumArray = (arr) => {
    let sum = 0 ;

    for(let i = 0; i<arr.length; i++) {
        sum+=arr[i]
    }

    return sum

}

console.log(sumArray(arr));
