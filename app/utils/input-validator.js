export default {
  isValid: function(input){
    return /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/.test(input);
  }
};