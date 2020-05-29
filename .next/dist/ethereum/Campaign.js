'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Crowdfunding = require('./build/Crowdfunding');

var _Crowdfunding2 = _interopRequireDefault(_Crowdfunding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
    return new _web2.default.eth.Contract(JSON.parse(_Crowdfunding2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL0NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXFCLEFBQXJCLEFBRUE7Ozs7OztrQkFBZSxtQkFBVyxBQUN0QjtXQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNQLEtBQUssQUFBTCxNQUFXLHVCQUFTLEFBQXBCLEFBRE8sWUFFUCxBQUZPLEFBQVAsQUFJSDtBQUxEIiwiZmlsZSI6IkNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kb2xhcG9vbGFuaWF3by9EZXNrdG9wL25vaW4ifQ==