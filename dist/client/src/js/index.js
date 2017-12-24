'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _app = require('./Common/app');

var _app2 = _interopRequireDefault(_app);

var _lineWidthController = require('./Common/lineWidthController');

var _lineWidthController2 = _interopRequireDefault(_lineWidthController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @ROOT_application_class
 */
var Root = function Root() {
    _classCallCheck(this, Root);

    new _app2.default();
    new _lineWidthController2.default();
};

/**
 * @IIFE_start_application
 */


(function () {
    var root = new Root();

    Object.freeze(root);
})();

exports.default = Root;
//# sourceMappingURL=index.js.map