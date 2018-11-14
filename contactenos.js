
var mensajes = []

mensajes = JSON.parse(localStorage.getItem('Mensajes'))

class Mensaje {
    constructor(_nombre, _apellido, _asunto, _mensaje, _email, _motivo) {
        this.nombre = _nombre
        this.apellidos = _apellido
        this.asunto = _asunto
        this.mensaje = _mensaje
        this.email = _email
        this.motivo = _motivo
    }
}

function enviar() {
    var nombre = document.getElementById("first_name").value
    var apellidos = document.getElementById("last_name").value
    var asunto = document.getElementById("asunto").value
    var mensaje = document.getElementById("mensaje").value
    var email = document.getElementById("email").value
    var motivo = document.getElementById("motivo").value

    var contactenos = new Mensaje(nombre, apellidos, asunto, mensaje, email, motivo)

    mensajes.push(contactenos)

    localStorage.setItem('Mensajes', JSON.stringify(mensajes))

    limpiarTextos()
}

function limpiarTextos() {

    document.getElementById("first_name").value = ""
    document.getElementById("last_name").value = ""
    document.getElementById("asunto").value = ""
    document.getElementById("mensaje").value = ""
    document.getElementById("email").value = ""
    document.getElementById("motivo").value = ""
    
}
