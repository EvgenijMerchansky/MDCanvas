"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var putPoint = exports.putPoint = function putPoint(e) {
    var ctx = undefined.ctx;

    /**
     * @line_color_and_line_width
     */

    ctx.lineWidth = undefined.lineWidth * 2;
    ctx.strokeStyle = undefined.color.value;

    if (undefined.drag) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.fillStyle = undefined.color.value; // changes
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, undefined.lineWidth, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    }
};
//# sourceMappingURL=heplers.js.map