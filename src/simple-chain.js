const CustomError = require("../extensions/custom-error");

// var length = 0;
var chain = [];

const chainMaker = {
  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return chain.length;
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(value === null) value = 'null';
    chain.push(value);
    return this;
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(position < 1 || position > chain.length) {
      chain = [];
      throw new Error();
    }
    chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    chain = chain.reverse();
    return this;
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let result = chain;
    chain = [];
    return '( ' + result.join(' )~~( ') + ' )';
  }
};

module.exports = chainMaker;
