// Contains logic for simple mathematical action with two input values
export default {
  "+": function(a, b){
    var result = a + b;
    return parseFloat(result.toPrecision(10));
  },

  "*": function(a, b){
    var result = a * b;
    return parseFloat(result.toPrecision(10));
  },

  "/": function(a, b){
    var result = a / b;
    return parseFloat(result.toPrecision(10));
  },

  "-": function(a, b){
    var result = a - b;
    return parseFloat(result.toPrecision(10));
  }
};