
import Pasaje from "./assets/js/modelos/Pasaje.js"
import FormRegistroDePasajes from "./assets/js/vistas/FormRegistroDePasajes.js"

export const formRegistroDePasajes = new FormRegistroDePasajes()

document.querySelector('body').appendChild(formRegistroDePasajes.getFormulario())