import Ember from 'ember';
import functions from "simple-calculator/helpers/count-helper";

export default Ember.Controller.extend({
  inputValues: "",
  functions: functions,

  getfunctions: function(){
    return functions;
  },
  actions: {
    setInputValue: function(inputValue) {
        	this.set("inputValues", this.get("inputValues") + inputValue);
    },

    // Calls when on of 'Mathematical operator's' button is clicked, sucj as '+', '-', '*', '/'
    applyOperator: function(operator) {
      if (this.get("totalValue") === undefined){
        this.set("totalValue", parseFloat(this.get("inputValues")));
        this.set("inputValues", "");
      }

      else if (this.get("mathematicalSymbol") && this.get("inputValues")){
        this.send("calculate");
      }

      this.set("mathematicalSymbol", operator);
    },

    // Calls when '=' button is clicked
    equals: function(){
      if (this.get("inputValues")){
        this.send("calculate");
        this.set("inputValues", "");
        this.set("mathematicalSymbol", "");
      }
    },

    // Performs logic of mathematical actions with two incoming values
    calculate: function(){
      var result = this.get("functions")[this.get("mathematicalSymbol")](this.get("totalValue"), parseFloat(this.get("inputValues")));
      this.set("totalValue", result);
      this.set("inputValues", "");
    },

    // Cals when 'Clear' button is clicked and performs cleaning logic
    clear: function(){
      this.set("inputValues", "");
      this.set("mathematicalSymbol", "");
      this.set("totalValue", undefined);
    }
  }
});
