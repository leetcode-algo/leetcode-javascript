/*
Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.

A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

Example 1:
  Input: mat = [[1,0,0],
                [0,0,1],
                [1,0,0]]
  Output: 1
  Explanation: (1,2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.

Example 2:

  Input: mat = [[1,0,0],
                [0,1,0],
                [0,0,1]]
  Output: 3
  Explanation: (0,0), (1,1) and (2,2) are special positions.

Example 3:
  Input: mat = [[0,0,0,1],
                [1,0,0,0],
                [0,1,1,0],
                [0,0,0,0]]
  Output: 2

Example 4:
  Input: mat = [[0,0,0,0,0],
                [1,0,0,0,0],
                [0,1,0,0,0],
                [0,0,1,0,0],
                [0,0,0,1,1]]
  Output: 3

Constraints:
  rows == mat.length
  cols == mat[i].length
  1 <= rows, cols <= 100
  mat[i][j] is 0 or 1.
 */
/*
 * @param {number[][]} mat
 * @return {number}
 */
const numSpecial = function(mat) {
  const rows = new Array(mat.length).fill(0);
  const cols = new Array(mat[0].length).fill(0);
  for (let i = 0; i < rows.length; ++i) {
    for (let j = 0; j < cols.length; ++j) {
      if (mat[i][j]) {
        ++rows[i];
        ++cols[j];
      }
    }
  }
  let result = 0;
  for (let i = 0; i < rows.length; ++i) {
    for (let j = 0; j < cols.length; ++j) {
      if (mat[i][j] && rows[i] === 1 && cols[j] === 1) {
        ++result;
      }
    }
  }
  return result;
};

console.log(numSpecial([[1, 0, 0], [0, 0, 1], [1, 0, 0]]));
console.log(numSpecial([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));
