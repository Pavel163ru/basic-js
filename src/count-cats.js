const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */ matrix = []) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  for(let row of matrix){
    for(let cell of row){
      if(cell == '^^'){
        count++;
      }
    }
  }
  return count;
};
