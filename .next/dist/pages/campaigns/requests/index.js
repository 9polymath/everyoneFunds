'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Campaign = require('../../../ethereum/Campaign');

var _Campaign2 = _interopRequireDefault(_Campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dolapoolaniawo/Desktop/noin/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'renderRow',
        value: function renderRow() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    key: index,
                    id: index,
                    request: request,
                    address: _this2.props.address,
                    approversCount: _this2.props.approversCount,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 15 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Amount'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Recipient'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Approval'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Approve'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Finalize'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, this.renderRow())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, ' Found ', this.props.requestCount, ' requests. '));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, approversCount, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _Campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getRequestsCount().call();

                            case 4:
                                requestCount = _context.sent;
                                _context.next = 7;
                                return campaign.methods.approversCount().call();

                            case 7:
                                approversCount = _context.sent;
                                _context.next = 10;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                                    return campaign.methods.requests(index).call();
                                }));

                            case 10:
                                requests = _context.sent;
                                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkxheW91dCIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvdyIsInJlcXVlc3RDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7QUFDakIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7OztvQ0FpQlM7eUJBQ1A7O3dCQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFTLE9BQVUsQUFDOUM7dUNBQ0ksQUFBQzt5QkFBRCxBQUNNLEFBQ047d0JBRkEsQUFFSSxBQUNKOzZCQUhBLEFBR1MsQUFDVDs2QkFBUyxPQUFBLEFBQUssTUFKZCxBQUlvQixBQUNwQjtvQ0FBZ0IsT0FBQSxBQUFLLE1BTHJCLEFBSzJCOztrQ0FMM0I7b0NBREosQUFDSSxBQVFQO0FBUk87QUFDQSxpQkFEQTtBQUZSLEFBQU8sQUFXVixhQVhVOzs7O2lDQVlIO2dCQUFBLEFBQ0ksU0FESixBQUNzQyx1QkFEdEMsQUFDSTtnQkFESixBQUNZLE1BRFosQUFDc0MsdUJBRHRDLEFBQ1k7Z0JBRFosQUFDaUIsYUFEakIsQUFDc0MsdUJBRHRDLEFBQ2lCO2dCQURqQixBQUM2QixPQUQ3QixBQUNzQyx1QkFEdEMsQUFDNkIsQUFDakM7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDZCQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0Qzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQWhCLEFBQXdCLFNBQVEsT0FBTyxFQUFDLGNBQXhDLEFBQXVDLEFBQWU7OEJBQXREO2dDQUFBO0FBQUE7ZUFKWixBQUVJLEFBQ0ksQUFDSSxBQUtSLGtDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx1QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUVJLEFBQ0EsZ0NBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSEosQUFHSSxBQUNBLDJCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUpKLEFBSUksQUFDQSw4QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFMSixBQUtJLEFBQ0EsNkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTkosQUFNSSxBQUNBLDRCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQVRaLEFBQ0ksQUFDSSxBQU9JLEFBR1IsK0JBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBckJSLEFBU0ksQUFZSSxBQUNLLEFBQUssQUFHZCwrQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBYSxnQkFBQSxBQUFLLE1BQWxCLEFBQXdCLGNBMUJoQyxBQUNJLEFBeUJJLEFBR1g7Ozs7O2lILEFBNUQ0Qjs7Ozs7aUNBQ2pCO0EsMENBQVksTSxBQUFNLE0sQUFBbEIsQUFDRjtBLDJDQUFXLHdCLEFBQUEsQUFBUzs7dUNBQ0MsU0FBQSxBQUFTLFFBQVQsQUFBaUIsbUIsQUFBakIsQUFBb0M7O2lDQUF6RDtBOzt1Q0FDdUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsaUIsQUFBakIsQUFBa0M7O2lDQUF6RDtBOzt5REFFaUIsQUFBUSxVQUNyQixTQUFOLEFBQU0sQUFBUyxlQUFmLEFBQ0ssT0FETCxBQUVLLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3pCOzJDQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLE9BQWpDLEFBQU8sQUFBaUMsQUFDM0M7QSxBQUxrQixBQUNuQixpQ0FBQSxDQURtQjs7aUNBQWpCO0E7aUVBUUMsRUFBRSxTQUFGLFNBQVcsVUFBWCxVQUFxQixjQUFyQixjQUFtQyxnQixBQUFuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlEZixBLEFBaEUyQjs7a0JBZ0UzQixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kb2xhcG9vbGFuaWF3by9EZXNrdG9wL25vaW4ifQ==