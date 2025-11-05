// Problem Statement

// Given an array arr[] of integers and a target value target,
// find the indices of the two numbers that add up to the target.

// You can assume:

// Each input has exactly one solution.

// You cannot use the same element twice.

// 🧠 Example
// Input:  arr = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Because: arr[0] + arr[1] = 2 + 7 = 9

// 🔹 1. Brute Force Approach (Basic DSA logic)
// 🔧 Algorithm

// Loop through each element i

// Inside that, loop again from i+1

// Check if arr[i] + arr[j] == target

// If yes → return [i, j]



const arr = [2, 7, 11, 15]
const target = 9


const twoSum = (arr, target) => {
    for(let i = 0; i<arr.length; i++) {
        for(let j= i+i; j<arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum(arr, target));
