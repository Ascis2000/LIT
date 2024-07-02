
import { LitElement, html, css } from 'lit';

export class DwTagList extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            tags: { type: Array },
        };
    }

    constructor() {
        super();
        this.tags = ['Albacete', 'Almeria', 'Badajoz', 'Cuenca', 'Granada'];
    }

    render() {
        return html`
            ${
              this.tags.length == 0
              ? html`<p>No tenemos tags que mostrar</p>`
              : html`
                   <ul>
                       ${this.tags.map( tag => html`<li>${tag}</li>`)}
                   </ul>
                `
            }
            <button @click="${this.aniadir}">Añadir al listado 'Asturias'</button>
			<button @click="${() => this.eliminar('Asturias')}">Eliminar del listado 'Asturias'</button>
        `;
    }

	aniadir() {
		if (!this.tags.includes('Asturias')) {
			this.tags = [...this.tags, 'Asturias'].sort();
			// this.tags.push('Asturias'); -> No funciona con push()
		}
	}
	
	eliminar(tag) {
		if (this.tags.includes(tag)) {alert(tag)
			this.tags = this.tags.filter(t => t !== tag);
			console.log(`${tag} eliminado. Tags actuales: `, this.tags);
		} else {
			console.log(`${tag} no se encuentra en los tags.`);
		}
	}
}
customElements.define('dw-tag-list', DwTagList);