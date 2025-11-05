// 🧩 Problem Name: Stock Buy and Sell

// Category: Array / Dynamic Programming
// Difficulty: Medium

// 🧠 Problem Statement

// You are given an array prices[] where
// prices[i] is the price of a stock on the i-th day.
// You want to maximize your profit by choosing one day to buy and one day to sell the stock.
// 👉 You must buy before you sell.
// Return the maximum profit.
// If no profit is possible, return 0.

// Example
// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5

//  Buy on day 2 (price = 1),
//  Sell on day 5 (price = 6),
//  Profit = 6 - 1 = 5

//  1. Brute Force (Basic DSA Logic)
//  Algorithm
// Try every possible pair (buy, sell)

// Find the maximum difference prices[j] - prices[i] where j > i

// 💻 Code
// profit = prices[i] - minPrice

const arr = [7, 1, 5, 3, 6, 4];

const maxProfit = (arr) => {
  let minPrice = arr[0];
  let maxProfit = 0;

  for (let i = 0; i < arr.length; i++) {
    const profit = arr[i] - minPrice;
    // update maxProfit if profit is higher
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    // update minPrice if a lower price is found
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    }
  }

  return maxProfit;
};

console.log(maxProfit(arr));
