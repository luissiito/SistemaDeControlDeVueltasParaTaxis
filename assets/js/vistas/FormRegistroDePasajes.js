import tramos from '../datos/tramos.json' with {type:"json"}
import BotonEnviar from './BotonEnviar.js';
export const dataTramos = tramos;

export default class FormRegistroDePasajes{
    constructor(){
        this.formulario = document.createElement('form')
        this.labelTramo = document.createElement('label')
        this.selectDirecciones = document.createElement('select')
        this.selectTramos = document.createElement('select')
        this.botonEnviar = new BotonEnviar()
        this.armar()
    }

    getFormulario(){return this.formulario}
    getLabelTramo(){return this.labelTramo}
    getSelectDirecciones(){return this.selectDirecciones}
    getSelectTramos(){return this.selectTramos}
    getBotonEnviar(){return this.botonEnviar}

    armar(){
        this.armarSelectDirecciones()
        this.añadirEventoClickAlSelectDeDirecciones()
        this.getLabelTramo().textContent = 'Seleccione el Tramo'
        this.getBotonEnviar().getBoton().textContent = 'Enviar'
        this.getFormulario().append(this.getSelectDirecciones(), this.getLabelTramo(), this.getSelectTramos())
        this.cargarInformacionAlSelectTramos(this.getSelectDirecciones().selectedIndex)
        this.añadirAtributosAlSelectTramos()
    }
    armarSelectDirecciones(){
        for(let i = 0; i < 2; i++){
            const option = document.createElement('option')
            option.value = i
            switch(i){
                case 0 : option.textContent = 'BAJADA'; break;
                case 1 : option.textContent = 'SUBIDA'; break;
            }
            this.getSelectDirecciones().append(option)
        }
        this.añadirAtributosAlSelectDirecciones()
    }
    añadirAtributosAlSelectDirecciones(){
        this.getSelectDirecciones().setAttribute('id','direcciones')
    }
    añadirAtributosAlSelectTramos(){
        this.getSelectTramos().setAttribute('id','tramos')
    }
    añadirEventoClickAlSelectDeDirecciones(){
        this.selectDirecciones.addEventListener('change', ()=>{
            this.cargarInformacionAlSelectTramos(this.getSelectDirecciones().selectedIndex)
        })
    }

    cargarInformacionAlSelectTramos(value){
        this.limpiarSelectTramos()
        if(Number(value) === 0){//Bajada
            for(let i = 0; i < tramos[0].tramosBajadas.length; i++){
                const option = document.createElement('option')
                option.setAttribute('id',`${tramos[0].tramosBajadas[i].id}`)
                option.textContent = tramos[0].tramosBajadas[i].nombre
                this.getSelectTramos().appendChild(option)
            }
        }else if(Number(value) == 1){//Subida
            for(let i = 0; i < tramos[0].tramosSubidas.length; i++){
                const option = document.createElement('option')
                option.setAttribute('id',`${tramos[0].tramosSubidas[i].id}`)
                option.textContent = tramos[0].tramosSubidas[i].nombre
                this.getSelectTramos().appendChild(option)
            }
        }
        
        if(this.getSelectTramos().options.length > 0){this.getFormulario().append(this.getBotonEnviar().getBoton())}
    }

    limpiarSelectTramos(){
        while (this.getSelectTramos().firstChild) {
            this.getSelectTramos().removeChild(this.getSelectTramos().firstChild);
        }
    }
}