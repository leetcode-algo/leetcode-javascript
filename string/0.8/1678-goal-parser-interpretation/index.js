/*
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

Example 1:
  Input: command = "G()(al)"
  Output: "Goal"
  Explanation: The Goal Parser interprets the command as follows:
  G -> G
  () -> o
  (al) -> al
  The final concatenated result is "Goal".

Example 2:
  Input: command = "G()()()()(al)"
  Output: "Gooooal"
  Example 3:

  Input: command = "(al)G(al)()()G"
  Output: "alGalooG"

Constraints:
  1 <= command.length <= 100
  command consists of "G", "()", and/or "(al)" in some order.
 */

/*
rpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

 */

/**
 * @param {string} command
 * @return {string}
 */
// Solution 1: Regular expression
// const interpret = function(command) {
//   return command.replace(/\(al\)/g, 'al')
//       .replace(/\(\)/g, 'o');
// };

// Solution 2: Split and join
// const interpret = function(command) {
//   return command.split('()').join('o').split('(al)').join('al');
// };

// Solution 3: General solution
const interpret = function(command) {
  let result = '';
  for (let i = 0; i < command.length; ++i) {
    if (command[i] === 'G') {
      result += 'G';
    } else if (i + 1 < command.length && command[i + 1] === ')') {
      result += 'o';
      ++i;
    } else if (i + 3 < command.length && command[i + 3] === ')') {
      result += 'al';
      i+=3;
    } else {
      result += command[i];
      ++i;
    }
  }
  return result;
};

console.log(interpret('G()(al)'));
