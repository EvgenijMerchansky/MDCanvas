'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineWidthController = function (_App) {
    _inherits(LineWidthController, _App);

    function LineWidthController() {
        _classCallCheck(this, LineWidthController);

        /**
         * @finding_elements
         */
        var _this = _possibleConstructorReturn(this, (LineWidthController.__proto__ || Object.getPrototypeOf(LineWidthController)).call(this));

        _this.plusBtn = document.getElementById('line_plus');
        _this.minusBtn = document.getElementById('line_minus');
        _this.widthValue = document.getElementById('show_line_value');

        /**
         * @binding_context
         */
        _this.incrementCount = _this.incrementCount.bind(_this);
        _this.decrementCount = _this.decrementCount.bind(_this);

        /**
         * @adding_listeners
         */
        _this.plusBtn.addEventListener('click', _this.incrementCount);
        _this.minusBtn.addEventListener('click', _this.decrementCount);
        return _this;
    }

    /**
     * @increment_line_width
     */


    _createClass(LineWidthController, [{
        key: 'incrementCount',
        value: function incrementCount() {
            this.lineWidth += this.interval;

            if (this.lineWidth > 50) {
                this.lineWidth = 50;
            }
            this.widthValue.textContent = this.lineWidth;
        }

        /**
         * @decrement_line_width
         */

    }, {
        key: 'decrementCount',
        value: function decrementCount() {
            this.lineWidth -= this.interval;

            if (this.lineWidth < 5) {
                this.lineWidth = 5;
            }
            this.widthValue.textContent = this.lineWidth;
        }
    }]);

    return LineWidthController;
}(_app2.default);

exports.default = LineWidthController;
//# sourceMappingURL=lineWidthController.js.map