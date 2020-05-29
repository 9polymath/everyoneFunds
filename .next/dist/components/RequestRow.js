'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('../ethereum/Campaign');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dolapoolaniawo/Desktop/noin/components/RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            campaign = (0, _Campaign2.default)(_this.props.address);
                            _context.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context.sent;
                            _context.next = 6;
                            return campaign.methods.approveRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            campaign = (0, _Campaign2.default)(_this.props.address);
                            _context2.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context2.sent;
                            _context2.next = 6;
                            return campaign.methods.finalizeRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount;

            var readyToFinalize = request.approvalCount > approversCount / 2;
            return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'Approve')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFDRixxRkFBWSxtQkFBQTswQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFDRjtBQURFLHVDQUNTLHdCQUFTLE1BQUEsQUFBSyxNQUR2QixBQUNTLEFBQW9COzRDQUQ3QjttQ0FFZSxjQUFBLEFBQUssSUFGcEIsQUFFZSxBQUFTOzs2QkFBMUI7QUFGRSxnREFBQTs0Q0FBQTs0Q0FHRixBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7c0NBQzNDLFNBSkYsQUFHRixBQUFvRCxBQUNoRCxBQUFTO0FBRHVDLEFBQ3RELDZCQURFOzs2QkFIRTs2QkFBQTs0Q0FBQTs7QUFBQTt3QkFBQTtBLG1CLEFBT1osc0ZBQWEsb0JBQUE7MEJBQUE7NEVBQUE7MEJBQUE7dURBQUE7NkJBQ0o7QUFESSx1Q0FDTyx3QkFBUyxNQUFBLEFBQUssTUFEckIsQUFDTyxBQUFvQjs2Q0FEM0I7bUNBRWMsY0FBQSxBQUFLLElBRm5CLEFBRWMsQUFBUzs7NkJBQTFCO0FBRkcsaURBQUE7NkNBQUE7NENBR0gsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0Q7c0NBQzVDLFNBSkQsQUFHSCxBQUFxRCxBQUNqRCxBQUFTO0FBRHdDLEFBQ3ZELDZCQURFOzs2QkFIRzs2QkFBQTs2Q0FBQTs7QUFBQTt5QkFBQTtBOzs7OztpQ0FPSjtnQkFBQSxBQUNHLE1BREgsQUFDZ0IsdUJBRGhCLEFBQ0c7Z0JBREgsQUFDUSxPQURSLEFBQ2dCLHVCQURoQixBQUNRO3lCQUMwQixLQUZsQyxBQUV1QztnQkFGdkMsQUFFRSxZQUZGLEFBRUU7Z0JBRkYsQUFFTSxpQkFGTixBQUVNO2dCQUZOLEFBRWUsd0JBRmYsQUFFZSxBQUNwQjs7Z0JBQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBZ0IsaUJBQWhELEFBQStELEFBQy9EO21DQUNLLGNBQUQsT0FBSyxVQUFVLFFBQWYsQUFBdUIsVUFBVSxVQUFVLG1CQUFtQixDQUFDLFFBQS9ELEFBQXVFOzhCQUF2RTtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQURKLEFBQ0ksQUFDQSxxQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFGSixBQUVJLEFBQWUsQUFDZiw4QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSw2QkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BSHRDLEFBR0ksQUFBTyxBQUFpQyxBQUN4QywyQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFKSixBQUlJLEFBQWUsQUFDZiw0QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFBQSxBQUFlLGVBQWdCLEtBTG5DLEFBS0ksQUFDQSxpQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSx1QkFDSyxBQUFRLFdBQVIsQUFBbUIsdUJBQ2hCLEFBQUMseUNBQU8sT0FBUixBQUFjLFNBQVEsT0FBdEIsTUFBNEIsU0FBUyxLQUFyQyxBQUEwQzs4QkFBMUM7Z0NBQUE7QUFBQTthQUFBLEVBUlosQUFNSSxBQUVRLEFBS1IsNkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsdUJBQ0ssQUFBUSxXQUFSLEFBQW1CLHVCQUNoQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLFNBQVMsS0FBcEMsQUFBeUM7OEJBQXpDO2dDQUFBO0FBQUE7YUFBQSxFQWhCaEIsQUFDSSxBQWFJLEFBRVEsQUFPbkI7Ozs7O0FBRUwsQSxBQTVDeUI7O2tCQTRDekIsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kb2xhcG9vbGFuaWF3by9EZXNrdG9wL25vaW4ifQ==