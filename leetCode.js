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
