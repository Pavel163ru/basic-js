const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */ members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members)){
    return false;
  }
  let arr = [];
  return members.map(m => typeof m == 'string' ? m.trim().substring(0, 1).toUpperCase() : '').sort().join('');
};
