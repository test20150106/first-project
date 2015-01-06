/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    handleIncrementAction: {
        value: function (event) {
            console.log(this.templateObjects.value.element.value);
        }
    },

    handleDecrementAction: {
        value: function (event) {
            console.log(this.templateObjects.value);
        }
    }

});
