
import {LitElement, html, css} from 'lit';

class DwShowHide extends LitElement {

    static styles = css`
        :host {
            display: block;
        }
        div {
            display: none;

        }
        :host([show]) div {
            display: block;
        }
    `;

    static properties = {
        texto: String,
        show: { 
            type: Boolean,
            reflect: true,
        },   
    }

    constructor() {
        super();
        this.show = false;
        this.texto = "Mostrar";
    }

    render() {
        return html`
            <p @click="${this.change}">${this.texto}</p>
            <div>Este contenido se ve algunas veces sí y otras no...</div>
        `;
    }

    change() {
        this.show = !this.show;
        this.texto = this.show ? "Ocultar" : "Mostrar";
    }
}

customElements.define('dw-show-hide', DwShowHide);