//console.log("correcto");
document.querySelector('#comprar').addEventListener('click', traerDatos);

function traerDatos() {
  //console.log('dentro de la funcion');
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'products.json', true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this.responseText);
      let datos = JSON.parse(this.responseText);
      //console.log(datos);
      let mostrar = document.querySelector('#mostrar');
      res.innerHTML = '';

      for (let item of datos) {
        //console.log(item.precio)
        res.innerHTML += `
          <tr>
            <td>${item.nombre}</td>
            <td>${item.precio}</td>
          </tr>
        `
      }
    }
  }
}