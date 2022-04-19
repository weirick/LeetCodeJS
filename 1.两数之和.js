/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  //普通暴力破解
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i+1; j < nums.length; j++) {
  //     if (nums[i]+nums[j] == target) {
  //       return [i,j];
  //     }
  //   }
  // }

  //todo:排序
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    // 先获得数组前面的数
    let num = nums[i];
    // 拿结果减得到一个差
    let n = target - num;
    // 进行比对，不在obj里的就暂存
    if (num in obj) {
      return [i, obj[num]];
    } else {
      obj[n] = i;
    }
  }
};
// @lc code=end

