import Boton from "./Boton.js"
import Pasaje from "../modelos/Pasaje.js"
import { dataTramos } from "./FormRegistroDePasajes.js"
import { formRegistroDePasajes } from "../../../main.js"

export default class BotonEnviar extends Boton{
    constructor(){
        super()
        super.getBoton().textContent = 'Enviar'
        this.click()
    }

    click(){
        super.getBoton().addEventListener('click', (event)=>{
            event.preventDefault()
            const selectTramos = formRegistroDePasajes.getSelectTramos()
            const selectDirecciones = document.querySelector('select#direcciones')
           /*  const precio = this.obtenerPrecioDelTramo(selectDirecciones.selectedIndex) */
            const pasaje = new Pasaje('Paradero 17', selectDirecciones.selectedIndex, selectTramos.options[selectTramos.selectedIndex].id)
            console.log(pasaje)
            //console.log(selectTramos.options[selectTramos.selectedIndex].id)
        })
    }

   /*  obtenerPrecioDelTramo(index){
        if(index === 0){return dataTramos[0].tramosBajadas[formRegistroDePasajes.getSelectTramos().selectedIndex].precio}
        else if(index === 1){return dataTramos[0].tramosSubidas[formRegistroDePasajes.getSelectTramos().selectedIndex].precio}
    } */
}