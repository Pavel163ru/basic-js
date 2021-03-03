const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor(direct){
    if(direct === undefined) direct = true;
    this.direct = direct;
  }
  encrypt(message, key) {
    if(!message || !key){
      throw new Error();
    }
    let arr = message.toUpperCase().split('');
    let shift = key.toUpperCase().split('').map(k => this.chars.indexOf(k));

    let shiftIndex = 0;
    let result = arr.map(c => {
      let position = this.chars.indexOf(c);
      if(position == -1){
        return c;
      }else{
        let newpos = (position + shift[shiftIndex]) % this.chars.length;
        shiftIndex = (shiftIndex + 1) % shift.length;
        return this.chars.slice(newpos, newpos + 1);
      }
    });
    
    if(!this.direct){
      result = result.reverse();
    }

    return result.join('');
  }    
  decrypt(message, key) {
    if(!message || !key){
      throw new Error();
    }
    
    let arr = message.toUpperCase().split('');
    let shift = key.toUpperCase().split('').map(k => this.chars.indexOf(k));

    let shiftIndex = 0;
    let result = arr.map(c => {
      let position = this.chars.indexOf(c);
      if(position == -1){
        return c;
      }else{
        let newpos = (this.chars.length + position - shift[shiftIndex]) % this.chars.length;
        shiftIndex = (shiftIndex + 1) % shift.length;
        return this.chars.slice(newpos, newpos + 1);
      }
    });

    if(!this.direct){
      result = result.reverse();
    }
    
    return result.join('');
  }
}

module.exports = VigenereCipheringMachine;
