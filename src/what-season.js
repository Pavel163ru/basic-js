const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(/* date */ date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // spring, summer, autumn (fall), winter
  if(!date){
    return 'Unable to determine the time of year!';
  }
  if(!(date instanceof Date)){
    // console.log('error');
    throw new Error();
  }else if(Object.getOwnPropertyNames(date).sort().join('') != Object.getOwnPropertyNames(new Date()).sort().join('')){
    throw new Error();
  }
  let month = date.getMonth() + 1;
  let season;
  if(month < 3 || month > 11){
    season = 'winter';
  }else if(month < 6){
    season = 'spring';
  }else if(month < 9){
    season = 'summer';
  }else{
    season = 'autumn';
  }
  return season;
};
