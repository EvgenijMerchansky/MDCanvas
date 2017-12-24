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

var ClearCanvasController = function (_App) {
    _inherits(ClearCanvasController, _App);

    function ClearCanvasController() {
        _classCallCheck(this, ClearCanvasController);

        var _this = _possibleConstructorReturn(this, (ClearCanvasController.__proto__ || Object.getPrototypeOf(ClearCanvasController)).call(this));

        _this.eraserElement = document.getElementById('eraser');

        _this.swicthEraser.bind(_this);

        _this.eraserElement.addEventListener('click', _this.swicthEraser);
        return _this;
    }

    _createClass(ClearCanvasController, [{
        key: 'swicthEraser',
        value: function swicthEraser() {
            this.eraser = true;

            // console.log(this.eraser, 'this.eraser')
        }
    }]);

    return ClearCanvasController;
}(_app2.default);

exports.default = ClearCanvasController;
//# sourceMappingURL=clearCanvasController.js.map