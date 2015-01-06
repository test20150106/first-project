/**
 * @module ui/hello-world-canvas.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class HelloWorldCanvas
 * @extends Component
 */
exports.HelloWorldCanvas = Component.specialize(/** @lends HelloWorldCanvas# */ {
    constructor: {
        value: function HelloWorldCanvas() {
            this.super();
        }
    },

    draw: {
        value: function () {
            var fragment = document.createDocumentFragment();
            var div = document.createElement("div");
            div.textContent = "hello, world!";
            fragment.appendChild(div);
            fragment.appendChild(div.cloneNode(true));
            fragment.appendChild(div.cloneNode(true));
            fragment.firstChild.classList.add('HelloWorldDom-left');
            fragment.lastChild.classList.add('HelloWorldDom-right');
            this.element.appendChild(fragment);
        }
    }
});
