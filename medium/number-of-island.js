/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 *
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (44.09%)
 * Likes:    3873
 * Dislikes: 142
 * Total Accepted:    518.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of
 * islands. An island is surrounded by water and is formed by connecting
 * adjacent lands horizontally or vertically. You may assume all four edges of
 * the grid are all surrounded by water.
 *
 * Example 1:
 *
 *
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 *
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 *
 * Output: 3
 *
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let noOfIsland = 0;

  // helper
  function checkGrid(matrix, row, col) {
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[0].length ||
      matrix[row][col] === "0"
    ) {
      return;
    }

    matrix[row][col] = "0";

    checkGrid(matrix, row + 1, col);
    checkGrid(matrix, row - 1, col);
    checkGrid(matrix, row, col + 1);
    checkGrid(matrix, row, col - 1);
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "1") {
        ++noOfIsland;
        checkGrid(grid, row, col);
      }
    }
  }

  return noOfIsland;
};
// @lc code=end
