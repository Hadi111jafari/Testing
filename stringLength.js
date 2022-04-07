const stringLength = string => {
    if(string.length < 1 || string.length > 10) {
      throw Error(`value can't be less than 1 or bigger than 10 characters`);  
    }
    return string.length;
  }
  
  module.exports = stringLength;