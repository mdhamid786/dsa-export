

    // 🔲 35. Reverse an array
const arr = [5, 4, 3, 2, 1]

    const  reverseArray = (arr) => {
         
         let left = 0;
         let right = arr.length-1;
         while(left<right) {
             // swap
             let temp = arr[left];
             arr[left] = arr[right];
             arr[right] = temp;

             left++;
             right--

         }

         return arr
    }

    console.log(reverseArray(arr));
    