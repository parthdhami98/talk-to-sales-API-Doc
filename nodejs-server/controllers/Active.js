'use strict';

var utils = require('../utils/writer.js');
var Active = require('../service/ActiveService');

module.exports.cyo = function cyo (req, res, next) {
  var item = req.swagger.params['item'].value;
  Active.cyo(item)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sap = function sap (req, res, next) {
  var item = req.swagger.params['item'].value;
  Active.sap(item)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
