import App from './Common/app';
import LineWidthController from './Common/Controllers/lineWidthController';

/**
 * @ROOT_application_class
 */
class Root {
    constructor() {
        const app = new App();
        const lineWidthControllernew = new LineWidthController();
    }
}

/**
 * @IIFE_start_application
 */
(() => {
    const root = new Root();

    Object.freeze(root);
})();

export default Root


