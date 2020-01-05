/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(n) {
  var remainder = 0,
    reverseN = 0;
  var sign = n < 0;
  n = Math.abs(n);

  while (n) {
    remainder = n % 10;
    reverseN = reverseN * 10 + remainder;
    n = Math.floor(n / 10);
    console.log(n, "n");
  }
  return reverseN > 0x7fffffff ? 0 : sign ? -reverseN : reverseN;
};
// @lc code=end
