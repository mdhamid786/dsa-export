// Easy,Separate even and odd numbers,1D Arrays

let arr = [1, 2, 3, 4, 5, 6];

const separateEvenOdd = (arr) => {
    let even = [];
    let odd = [];

    for(let i = 0; i<arr.length; i++) {
        if(arr[i] %2 === 0) {
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        }
    }

    return {even, odd}
}
console.log(separateEvenOdd(arr));
