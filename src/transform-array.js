const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  arr = arr.slice();
  let prevValue;
  let currentValue;
  for(let i = 0; i < arr.length; i++){
    prevValue = currentValue;
    currentValue = arr[i];
    if(i == 0 && ['--discard-prev', '--double-prev'].includes(arr[i])){
      arr.splice(i, 1);
      i--;
      continue;
    }
    if(i == (arr.length - 1) && ['--double-next', '--double-next'].includes(arr[i])){
      arr.splice(i, 1);
      continue;
    }
    switch(arr[i]){
      case '--discard-next':
        arr.splice(i, 2);
        i--;
        break;
      case '--discard-prev':
        if(prevValue == '--discard-next'){
          arr.splice(i, 1);
          i--;
        }else{
          arr.splice(i - 1, 2);
          i -= 2;
        }
        break;
      case '--double-next':
        arr.splice(i, 1, arr[i + 1]);
        break;
      case '--double-prev':
        if(prevValue == '--discard-next'){
          arr.splice(i, 1);
          i--;
        }else{
          arr.splice(i, 1, arr[i - 1]);
        }
        break;
    }
  }
  return arr;
};
