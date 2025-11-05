// Problem Name: Three Sum

// Category: Array / Two-pointer
// Difficulty: Medium

// 🧠 Problem Statement

// Given an integer array arr[],
// find all unique triplets (a, b, c) such that:

// a + b + c = 0

// 👉 The solution set must not contain duplicate triplets.

// Example
// Input: arr = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]

// ✅ Because:

// (-1) + (-1) + 2 = 0

// (-1) + 0 + 1 = 0

// 🧮 1. Brute Force Approach (Simple DSA logic)
// 🔧 Algorithm

// Use three nested loops (i, j, k)

// Check if arr[i] + arr[j] + arr[k] == 0

// Store unique triplets

// 💻 Code

const arr = [-1, 0, 1, 2, -1, -4];

const threeSumBrute = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          let triplet = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);
          const str = triplet.toString();
          console.log(str);
          if (!result.some((r) => r.toString() === str)) {
            result.push(triplet);
          }
        }
      }
    }
  }

  return result;
};

console.log(threeSumBrute(arr));
