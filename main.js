var divMascotas = document.getElementById("mascotas")

fetch('https://web-veterinaria.firebaseio.com/Mascotas.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (misMascotas) {
    console.log(misMascotas);

    for (let mascota of misMascotas) {
      var div = document.createElement("div");
      
      div.innerHTML = `<div class="card col m3">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" height="200px" src="${misMascotas[mascota].imagen}">
      </div>
      <div class="card-content">
  <span class="card-title activator grey-text text-darken-4">${misMascotas[mascota].nombre}<i class="material-icons right">more_vert</i></span>
        <p><a href="#">This is a link</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${misMascotas[mascota].nombre}<i class="material-icons right">close</i></span>
        <p>
          Edad : ${misMascotas[mascota].edad}
        <p/>

        <p>
          Descripción: ${misMascotas[mascota].descripcion}
        </p>
      </div>
    </div>`;

      divMascotas.appendChild(div)

    }
  });

