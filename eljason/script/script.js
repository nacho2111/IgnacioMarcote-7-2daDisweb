let archivoarg = 'https://restcountries.com/v3.1/name/argentina';
let archivoperu = 'https://restcountries.com/v3.1/name/peru';
let archivocolombia = 'https://restcountries.com/v3.1/name/colombia';
let archivojapon = 'https://restcountries.com/v3.1/name/japan';

document.getElementById('country').addEventListener('click', () => {
  let valor = document.getElementById('opciones').value;
  if (valor === 'p0') {
    alert('Por favor elegí un país');
    return;
  }
  let paises = {p1: archivoperu, p2: archivoarg, p3: archivocolombia, p4: archivojapon};
  fetch(paises[valor])
    .then((rpta) => {
      return rpta.json();
    })
    .then((datos) => {
      let pais = datos[0];
      let contenedor = document.getElementById('mostrarp');
      contenedor.innerHTML = '';
      let div = document.createElement('div');
      div.innerHTML = `
        <p>Nombre: ${pais.name.common}</p>
        <img src="${pais.flags.png}" alt="Bandera de ${pais.name.common}">
        <p>Capital: ${pais.capital[0]}</p>
      `;
      contenedor.appendChild(div);
    })
    .catch((e) => {
      alert(`Error al leer: ${e}`);
    });
});



