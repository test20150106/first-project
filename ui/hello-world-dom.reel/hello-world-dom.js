/**
 * @module ui/hello-world-dom.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class HelloWorldDom
 * @extends Component
 */
exports.HelloWorldDom = Component.specialize(/** @lends HelloWorldDom# */ {
    constructor: {
        value: function HelloWorldDom() {
            this.super();
        }
    },

    draw: {
        value: function () {
            var fragment = document.createDocumentFragment();
            var div = document.createElement("div");
            div.textContent = "hello, world!";
            fragment.appendChild(div);
            div = document.createElement("div");
            div.textContent = "hello, world!";
            fragment.appendChild(div);
            div = document.createElement("div");
            div.textContent = "hello, world!";
            fragment.appendChild(div);
        }
    }
});
