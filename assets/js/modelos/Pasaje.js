import Tramo from "./Tramo.js"
import tramos from '../datos/tramos.json' with {type:"json"}


export default class Pasaje{
    constructor(destino, index, idDelTramo){
        this.destino = destino
        this.tramo = this.obtenerTramo(index, idDelTramo)
        this.valor = this.getTramo().getPrecio()
    }

    getDestino(){return this.destino}
    getTramo(){return this.tramo}
    getValor(){return this.valor}

    setDestino(nuevoDestino){this.destino = nuevoDestino}
    setTramo(nuevoTramo){this.tramo = nuevoTramo}
    setValor(nuevoValor){this.valor = nuevoValor}

    obtenerTramo(index, idDelTramo){
        if(index === 0){
            for(let i = 0; i < tramos[0].tramosBajadas.length; i++){
                if(idDelTramo === tramos[0].tramosBajadas[i].id){
                    return new Tramo(tramos[0].tramosBajadas[i].id, tramos[0].tramosBajadas[i].nombre, tramos[0].tramosBajadas[i].precio)
                }
            }          
        }else if(index === 1){
            for(let i = 0; i < tramos[0].tramosSubidas.length; i++){
                if(idDelTramo === tramos[0].tramosSubidas[i].id){
                    return new Tramo(tramos[0].tramosSubidas[i].id, tramos[0].tramosSubidas[i].nombre, tramos[0].tramosSubidas[i].precio)
                }
            } 
         }
    }
}