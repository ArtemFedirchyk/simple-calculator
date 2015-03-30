export default {
  "+": function(x, y){
    var result = x + y;
    return parseFloat(result.toPrecision(12));
  },

  "*": function(x, y){
    var result = x * y;
    return parseFloat(result.toPrecision(12));
  },

  "/": function(x, y){
    var result = x / y;
    return parseFloat(result.toPrecision(12));
  },

  "-": function(x, y){
    var result = x - y;
    return parseFloat(result.toPrecision(12));
  }
};