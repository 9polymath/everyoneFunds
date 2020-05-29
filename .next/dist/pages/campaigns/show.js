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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Campaign = require('../../ethereum/Campaign');

var _Campaign2 = _interopRequireDefault(_Campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

var _everyoneFunds = require('../../ethereum/everyoneFunds');

var _everyoneFunds2 = _interopRequireDefault(_everyoneFunds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dolapoolaniawo/Desktop/noin/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignShow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errorMessage: '',
            loading: false
        }, _this.onClick = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var address, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: '' });
                                address = (0, _Campaign2.default)(_this.props.address);
                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return address.methods.endCrowdfunding().send({
                                    from: accounts[0]
                                });

                            case 9:
                                _context.next = 11;
                                return _everyoneFunds2.default.methods.removeDeployedCampaign().send({ from: accounts[0] });

                            case 11:
                                _routes.Router.pushRoute('/');
                                _context.next = 17;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 17:
                                _this.setState({ loading: false });

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 14]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumDonation = _props.minimumDonation,
                targetDonation = _props.targetDonation,
                requestCount = _props.requestCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests to withdraw money',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimumDonation,
                meta: 'Minimum Donation (wei)',
                description: 'You must donate at least this much wei to become an approver'
            }, {
                header: _web2.default.utils.fromWei(targetDonation, 'ether'),
                meta: 'Target Donation (ether)',
                description: 'This is how much the campaign manager intends to raise with this campaign.'
            }, {
                header: requestCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from this contract. Requests must be approved by approvers'
            }, {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people that have donated to this contract.'
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend'
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, ' Campaign Details'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, 'View Requests')))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 9, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onClick, loading: this.state.loading, error: !!this.state.errorMessage, negative: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, 'End Campaign')))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                campaign = (0, _Campaign2.default)(props.query.address);
                                _context2.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context2.sent;
                                return _context2.abrupt('return', {
                                    address: props.query.address,
                                    minimumDonation: summary[0],
                                    targetDonation: summary[1],
                                    balance: summary[2],
                                    requestCount: summary[3],
                                    approversCount: summary[4],
                                    manager: summary[5]

                                });

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJGb3JtIiwiUHJvZ3Jlc3MiLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJMaW5rIiwiUm91dGVyIiwiZXZlcnlvbmVGdW5kcyIsIkNhbXBhaWduU2hvdyIsInN0YXRlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJhZGRyZXNzIiwicHJvcHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImVuZENyb3dkZnVuZGluZyIsInNlbmQiLCJmcm9tIiwicmVtb3ZlRGVwbG95ZWRDYW1wYWlnbiIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Eb25hdGlvbiIsInRhcmdldERvbmF0aW9uIiwicmVxdWVzdENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsInF1ZXJ5IiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUSxBQUFNLEFBQU0sQUFBUSxBQUFTLEFBQU07O0FBQzNDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVEsQUFBTSxBQUFhOztBQUMzQixBQUFPLEFBQW1COzs7Ozs7Ozs7SSxBQUVw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