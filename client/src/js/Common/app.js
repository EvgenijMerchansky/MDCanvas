class App {

    constructor() {

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
    putPoint (e) {
        const {ctx} = this;

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
    };

    /**
     * @line_drawing_switchers(start / stop)
     */
    makeLine (e) {
        this.drag = true;
        this.putPoint(e);
    };

    stopLine () {
        this.drag = false;
        this.ctx.beginPath()
    };

    /**
     * @active_eraser_switch_state_button_and_canvas_field
     */
    activeEraser () {
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

}

export default App;

