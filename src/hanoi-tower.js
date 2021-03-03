const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let transfers = 2**disksNumber - 1;
  let time = Math.floor((60 / turnsSpeed) * transfers * 60);
  return {turns: transfers, seconds: time};
};
