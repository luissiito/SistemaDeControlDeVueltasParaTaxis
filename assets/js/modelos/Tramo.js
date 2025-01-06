
export default class Tramo{
    constructor(id, nombre, precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }

    getId(){return this.id}
    getNombre(){return this.nombre}
    getPrecio(){return this.precio}
}