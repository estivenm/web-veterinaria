function enviar() {
    var nombre = document.getElementById("first_name").value
    var apellidos = document.getElementById("last_name").value
    var nombre_mascota = document.getElementById("nombre_mascota").value
    var descripcion = document.getElementById("descripcion").value
    var email = document.getElementById("email").value
    var edad = document.getElementById("edad").value

    var documento = {
        nombre: nombre_mascota,
        edad: edad,
        descripcion: descripcion,
        nombre_anunciante: nombre,
        apellido_anunciante: apellidos,
        email_anunciante: email
    }


    var url = 'https://web-veterinaria.firebaseio.com/Mascotas.json';

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(documento), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}
