import styles from "./_button.scss";

export class MagnetButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot!.innerHTML = `
            <style>${styles}</style>
            <button class="magnet-button"><slot/></button>
        `;
    }
}
