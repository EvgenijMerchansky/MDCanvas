'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);

        /**
         * @clearing_canvas_options
         */
        this.eraserElement = document.getElementById('eraser');
        this.eraser = false;

        /**
         * @canvas_initialize_and_options
         */
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        /**
         * @binding_context
         */
        this.putPoint = this.putPoint.bind(this);
        this.makeLine = this.makeLine.bind(this);
        this.stopLine = this.stopLine.bind(this);
        this.activeEraser = this.activeEraser.bind(this);

        /**
         * @adding_listeners
         */
        this.canvas.addEventListener("mousemove", this.putPoint);
        this.canvas.addEventListener("mousedown", this.makeLine);
        this.canvas.addEventListener("mouseup", this.stopLine);
        this.eraserElement.addEventListener("click", this.activeEraser);

        /**
         * @draw_options
         */
        this.color = document.getElementById('color');

        this.drag = false;

        /**
         * @line_width_options
         */
        this.lineWidth = 10;
        this.interval = 5;
    }

    /**
     * @line_drawing_function
     */


    _createClass(App, [{
        key: 'putPoint',
        value: function putPoint(e) {
            var ctx = this.ctx;


            ctx.lineWidth = this.lineWidth * 2;
            ctx.strokeStyle = this.eraser ? '#fbfbfb' : this.color.value;

            if (this.drag) {
                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();
                ctx.fillStyle = this.eraser ? '#fbfbfb' : this.color.value;
                ctx.beginPath();
                ctx.arc(e.offsetX, e.offsetY, this.lineWidth, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(e.offsetX, e.offsetY);
            }
        }
    }, {
        key: 'makeLine',


        /**
         * @line_drawing_switchers(start / stop)
         */
        value: function makeLine(e) {
            this.drag = true;
            this.putPoint(e);
        }
    }, {
        key: 'stopLine',
        value: function stopLine() {
            this.drag = false;
            this.ctx.beginPath();
        }
    }, {
        key: 'activeEraser',


        /**
         * @active_eraser_switch_state_button_and_canvas_field
         */
        value: function activeEraser() {
            if (this.eraser) {
                this.eraser = false;
                this.canvas.style.cursor = 'crosshair';
                this.eraserElement.textContent = 'Eraser';
            } else {
                this.eraser = true;
                this.canvas.style.cursor = 'cell';
                this.eraserElement.textContent = 'x';
            }
        }
    }]);

    return App;
}();

exports.default = App;
//# sourceMappingURL=app.js.map