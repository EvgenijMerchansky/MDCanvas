import App from './app';

class LineWidthController extends App {
    constructor () {
        super();

        /**
         * @finding_elements
         */
        this.plusBtn = document.getElementById('line_plus');
        this.minusBtn = document.getElementById('line_minus');
        this.widthValue = document.getElementById('show_line_value');

        /**
         * @binding_context
         */
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);

        /**
         * @adding_listeners
         */
        this.plusBtn.addEventListener('click', this.incrementCount);
        this.minusBtn.addEventListener('click', this.decrementCount);
    }

    /**
     * @increment_line_width
     */
    incrementCount () {
        this.lineWidth += this.interval;

        if (this.lineWidth > 50) {
            this.lineWidth = 50;
        }
        this.widthValue.textContent = this.lineWidth;
    }

    /**
     * @decrement_line_width
     */
    decrementCount () {
        this.lineWidth -= this.interval;

        if (this.lineWidth < 5) {
            this.lineWidth = 5;
        }
        this.widthValue.textContent = this.lineWidth;
    }
}

export default LineWidthController;