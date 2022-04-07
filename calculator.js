class Calculator {
    add = (...values) => {
      let result = 0;
      if(values.length < 2) {
        throw Error('need more than one value to proceed');
      } else {
        values.forEach(element => {
          if(typeof element !== 'number'){
            throw Error('only numbers allowed');
          } else {
            result += element;
          }
        })
      }
      return result;
    }
        
    subtract = (first, ...values) => {
      let result = first;
      if(typeof first !== 'number'){
        throw Error('only numbers allowed');
      } else if ( values.length < 1){
        throw Error('need more than one value to proceed');
      } else {
        values.forEach(element => {
          if(typeof element !== 'number'){
            throw Error('only numbers allowed');
          } else {
            result -= element
          }
        })
      }
      return result;
    }
        
    divide = (first, ...values) => {
      let result = first;
      if(typeof first !== 'number'){
        throw Error('only numbers allowed');
      } else if ( values.length < 1){
        throw new Error('need more than one value to proceed');
      } else {
        values.forEach(element => {
          if(typeof element !== 'number'){
            throw Error('only numbers allowed');
          } else {
            result /= element
          }
        })
      }
      return result.toFixed(2);
    }
        
    multiply = (first, ...values) => {
      let result = first;
      if(typeof first !== 'number'){
        throw Error('only numbers allowed');
      } else if ( values.length < 1){
        throw Error('need more than one value to proceed');
      } else {
        values.forEach(element => {
          if(typeof element !== 'number'){
            throw Error('only numbers allowed');
          } else {
            result *= element
          }
        })
      }
      return result
    }
  }
  
  const calculator = new Calculator()
  
  module.exports = calculator;
  
  