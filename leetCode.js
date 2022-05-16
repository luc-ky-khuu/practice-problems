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

//Valid Parentheses
var isValid = function (s) {
  let arr = [s[0]];
  for (let i = 1; i < s.length; i++) {
    let last = arr.length - 1
    if (s[i] === '}') {
      if (arr[last] !== '{') {
        return false
      }
      arr.pop();
    } else if (s[i] === ']') {
      if (arr[last] !== '[') {
        return false
      }
      arr.pop();
    } else if (s[i] === ')') {
      if (arr[last] !== '(') {
        return false
      }
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  if (arr.length > 0) {
    return false
  }
  return true;
};

// isPalindrome
var isPalindrome = function (s) {
  if (s.length < 2) {
    return true
  }
  const lowerString = s.toLowerCase();
  let forward = '';
  let reverse = '';
  for (let i = 0; i < lowerString.length; i++) {
    if ((lowerString.charCodeAt(i) >= 97 && lowerString.charCodeAt(i) <= 121) ||
      (lowerString.charCodeAt(i) >= 48 && lowerString.charCodeAt(i) <= 57)) {
      forward += lowerString[i];
      reverse = lowerString[i] + reverse;
    }
  }
  if (forward === reverse) {
    return true;
  }
  return false
};

// isAnagram
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  const obj = {};
  const obj2 = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined) {
      obj[s[i]] = 1
    } else {
      obj[s[i]] = obj[s[i]] += 1
    }
    if (obj2[t[i]] === undefined) {
      obj2[t[i]] = 1
    } else {
      obj2[t[i]] = obj2[t[i]] += 1
    }
  }
  for (const key in obj) {
    if (obj[key] !== obj2[key]) {
      return false
    }
  }
  return true
};
