const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */ sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(typeof sampleActivity != 'string'){
    return false;
  }
  let value = parseFloat(sampleActivity);
  if(isNaN(value) || value <= 0 || value > 15){
    return false;
  }

  let result = Math.log(MODERN_ACTIVITY / value) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(result);
};
