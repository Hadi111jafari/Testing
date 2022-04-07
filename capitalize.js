const capitalize = (string => {
    let newString = string.split('');
    newString[0]= newString[0].toUpperCase();
    newString= newString.join('');
    return newString;
  })
  
  module.exports = capitalize;