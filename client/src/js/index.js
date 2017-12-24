import App from './Common/app';
import LineWidthController from './Common/lineWidthController';

/**
 * @ROOT_application_class
 */
class Root {
    constructor() {
        new App();
        new LineWidthController();
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


