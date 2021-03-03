const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, level = 0) {
    let maxLevel = level;
    if(Array.isArray(arr)){
      maxLevel = ++level;
      for(let cell of arr){
        let deep = this.calculateDepth(cell, level);
        maxLevel = deep > maxLevel ? deep : maxLevel;
      }
    }
    return maxLevel;
  }
};