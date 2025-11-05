

// 4. Find the second largest element

const arr = [2,3,4,5,6,7,8,9,5,4,2]

const secondLargest = (arr) => {
    let first  = -Infinity;
    let second = -Infinity;
    for(let i = 0 ;i <arr.length; i++) {
        if(arr[i]> first) {
            second = first;
            first = arr[i]
        } else if(arr[i]>second && arr[i]< first) {
            second = arr[i]
        }
    }

     return second;
}

console.log(secondLargest(arr));
