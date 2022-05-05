//twoSum
var twoSum = function (nums, target) {
  const len = nums.length
  let index = 0;
  let counter = index + 1;
  while ((nums[index] + nums[counter]) !== target) {
    counter++
    if (counter > len) {
      index++
      counter = index + 1
    }
  }
  return [index, counter]
};

//Best Time to Buy and Sell Stock
var maxProfit = function (prices) {
  let buy = 0;
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (profit < (prices[i] - prices[buy])) {
      profit = (prices[i] - prices[buy])
    }
    if (prices[buy] > prices[i]) {
      buy = i
    };
  }
  return profit
};

//Contains Duplicate
var containsDuplicate = function (nums) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = i;
    } else {
      return true
    }
  }
  return false;
};
