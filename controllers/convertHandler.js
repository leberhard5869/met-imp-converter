function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var numStr = input.split(/[a-zA-Z]+/)[0];
    var regex = /\+\++|--+|\/\/+|\*\*+/;
    regex.test(numStr) ? result = "Invalid number" : result = eval(numStr);
    return result === undefined ? 1 : result === NaN ? "Invalid number" : result;
  };

  this.getUnit = function(input) {
    var result = (input.match(/kg$|lbs$|km$|mi$|l$|gal$/i));
    return result ? result[0].toLowerCase() : "Invalid unit";
  };

  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit) {
      case "gal":
        result = "l";
        break;
      case "l":
        result = "gal";
        break;
      case "km":
        result = "mi";
        break;
      case "mi":
        result = "km";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      default:
        result = "Invalid unit";
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "litres";
        break;
      case "km":
        result = "kilometres";
        break;
      case "mi":
        result = "miles";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      default:
        result = "Invalid unit";
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit) {
      case "gal":
        result = (initNum * galToL);
        break;
      case "l":
        result = (initNum / galToL);
        break;
      case "km":
        result = (initNum / miToKm);
        break;
      case "mi":
        result = (initNum * miToKm);
        break;
      case "lbs":
        result = (initNum * lbsToKg);
        break;
      case "kg":
        result = (initNum / lbsToKg);
        break;
      default:
        result = "Invalid";
    }
    return result;
  };
  
  this.getString = function(initNum, initUnitSpell, returnNum, returnUnitSpell) {
    var x = returnNum == "Invalid" ? "Invalid" : returnNum.toFixed(5);
    var result = `${initNum} ${initUnitSpell} converts to ${x} ${returnUnitSpell}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
