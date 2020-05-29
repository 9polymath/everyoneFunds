'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _everyoneFunds = require('./build/everyoneFunds');

var _everyoneFunds2 = _interopRequireDefault(_everyoneFunds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_everyoneFunds2.default.interface), '0xACD9c724Aa6db0a9e382ED2E3610e05489cA6479');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2V2ZXJ5b25lRnVuZHMuanMiXSwibmFtZXMiOlsid2ViMyIsImV2ZXJ5b25lRnVuZHMiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBMEIsQUFBMUI7Ozs7OztBQUVBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDYixLQUFLLEFBQUwsTUFBVyx3QkFBYyxBQUF6QixBQURhLFlBRWIsQUFGYSxBQUFqQixBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImV2ZXJ5b25lRnVuZHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RvbGFwb29sYW5pYXdvL0Rlc2t0b3Avbm9pbiJ9