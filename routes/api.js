'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var initUnitSpell = convertHandler.spellOutUnit(initUnit);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var returnUnitSpell = convertHandler.spellOutUnit(returnUnit);
      var toString = convertHandler.getString(initNum, initUnitSpell, returnNum, returnUnitSpell);
      
      res.json({ initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString });
    
    });    
};
