import { styleTag } from "src/utils/styleTag";
import styles from "./button.scss";

class MagnetButton extends HTMLElement {
    get image() {
        return decodeURIComponent(this.getAttribute("image") ?? "{}");
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot!.innerHTML = `
            ${styleTag(styles)}
            <button class="magnet-button"><slot/></button>
        `;
    }
}

customElements.define("magnet-button", MagnetButton);
