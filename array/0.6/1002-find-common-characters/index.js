/*
Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

Example 1:
  Input: ["bella","label","roller"]
  Output: ["e","l","l"]

Example 2:
  Input: ["cool","lock","cook"]
  Output: ["c","o"]

Note:
  1 <= A.length <= 100
  1 <= A[i].length <= 100
  A[i][j] is a lowercase letter
*/
/*
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = function(A) {
  const alphabet= new Array(26);
  alphabet.fill(0);
  for (const c of A[0]) {
    ++alphabet[c.charCodeAt(0) - 'a'.charCodeAt(0)];
  }

  for (let i = 1; i < A.length; ++i) {
    const alphabetCompare = new Array(26);
    alphabetCompare.fill(0);
    for (const c of A[i]) {
      ++alphabetCompare[c.charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    for (let j = 0; j < alphabet.length; ++j) {
      alphabet[j] = Math.min(alphabet[j], alphabetCompare[j]);
    }
  }

  const result = [];
  for (let i = 0; i < alphabet.length; ++i) {
    while (alphabet[i] !== 0) {
      result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
      --alphabet[i];
    }
  }
  return result;
};

// console.log(commonChars(['bella', 'label', 'roller']));
console.log(commonChars(['cool', 'lock', 'cook']));
