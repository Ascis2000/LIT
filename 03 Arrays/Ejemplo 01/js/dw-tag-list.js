
import { LitElement, html, css } from 'lit';

export class DwTagList extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
			ul {
				list-style-type: none;
				padding: 0;
			}
			li {
				background: #f3f3f3;
				margin: 5px 0;
				padding: 5px;
				border-radius: 4px;
			}
			button {
				margin: 5px;
			}
        `
    ];

    static get properties() {
        return {
            tags: { type: Array },
			ciudades: { type: Array 
        };
    }

    constructor() {
        super();
        this.tags = ['Albacete', 'Almeria', 'Badajoz', 'Cuenca', 'Granada'];
		this.ciudades = ['Albacete', 'Almeria', 'Badajoz', 'Cuenca', 'Granada', 'Asturias'];
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
			<button @click="${() => this.eliminar('Asturias')}">Eliminar del listado</button>
			
			<select id="selectCiudades">
                ${this.ciudades.map(ciudad => html`<option value="${ciudad}">${ciudad}</option>`)}
            </select>
        `;
    }
	
	/* Usando un getter
	get ciudades() {
        // Define las ciudades disponibles
        return ['Albacete', 'Almeria', 'Badajoz', 'Cuenca', 'Granada', 'Asturias'];
    }
	*/
	
	getCiudadSeleccionada() {
        let selectCiudades = this.shadowRoot.getElementById('selectCiudades');
        return selectCiudades.value;
    }
	
	aniadir() {
        let nuevaCiudad = this.getCiudadSeleccionada();
		
		if (!this.tags.includes(nuevaCiudad)) {
			this.tags = [...this.tags, nuevaCiudad].sort();
			// this.tags.push(nuevaCiudad); -> No funciona con push()
		}
	}
	
	eliminar() {
		let ciudadEliminar = this.getCiudadSeleccionada();
		
		if (this.tags.includes(ciudadEliminar)) {
			this.tags = this.tags.filter(t => t !== ciudadEliminar);
			console.log(`${ciudadEliminar} eliminado. Tags actuales: `, this.tags);
		} else {
			console.log(`${ciudadEliminar} no se encuentra en los tags.`);
		}
	}
}
customElements.define('dw-tag-list', DwTagList);