// Given a list of day stock prices (integers for simplicity), find the maximum
// single sell profit.

function calculateProfit(buy, sell) {
  return (-1 * buy) + sell;
}

function maximumProfit(array) {
  if (array.length < 2) {
    throw "Array must have at least 2 elements to calculate the maximum profit";
  }

  let minBuy = array[0];
  let bestBuy = array[0];
  let bestProfit = calculateProfit(array[0], array[1]);

  for (let i = 1; i < array.length; i++) {
    let currentSell = array[i];
    let currentProfit = calculateProfit(minBuy, currentSell);

    if (currentProfit > bestProfit) {
      bestBuy = minBuy;
      bestProfit = currentProfit;
    }

    if (currentSell < minBuy) {
      minBuy = currentSell;
    }
  };

  return [bestBuy, (bestBuy + bestProfit)];
}

const { assert } = require('../helpers');

assert(maximumProfit([8, 5, 12, 9, 19, 1]).toString(), '5,19');

// [8, 5, 12, 9, 19, 1, 10, 100]

// buy = 8
// sell = 5
// profit = -3
// best_buy = 8
// best_profit = -3
// min_buy = 5

// buy = 5
// sell = 12
// profit = 7
// best_buy = 12
// best_profit = 7
// min_buy = 5

// buy = 5
// sell = 9
// profit = 4
// best_buy = 5
// best_profit = 7
// min_buy = 5

// buy = 5
// sell = 19
// profit = 14
// best_buy = 5
// best_profit = 14
// min_buy = 5

// buy = 5
// sell = 1
// profit = -4
// best_buy = 5
// best_profit = 14
// min_buy = 1

// buy = 1
// sell = 10
// profit = 9
// best_buy = 5
// best_profit = 14
// min_buy = 1

// buy = 1
// sell = 100
// profit = 99
// best_buy = 1
// best_profit = 99
// min_buy = 1

assert(maximumProfit([21, 12, 11, 9, 6, 3]).toString(), '12,11');
assert(maximumProfit([-2, -3, 4, -1, -2, 1, 5, -3]).toString(), '-3,5');
assert(maximumProfit([-2, -3, -1, -2, -7]).toString(), '-3,-1');
