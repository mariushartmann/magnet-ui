import { html, css, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { ClassInfo, classMap } from "lit/directives/class-map.js";
import styles from "./_button.scss";

@customElement("magnet-button")
export class MagnetButton extends LitElement {
    static override styles = css`
        ${styles}
    `;

    protected getRenderClasses(): ClassInfo {
        return {
            "magnet-button": true
        };
    }

    protected override render(): TemplateResult {
        return html`<button
            class="${classMap(this.getRenderClasses())}"
        ></button>`;
    }
}
