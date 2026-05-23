let archivorazas = 'https://dog.ceo/api/breeds/list/all';

document.getElementById('mostrar').addEventListener('click', () => {
fetch(archivorazas)
.then((rpta) => {
return rpta.json();
})
.then((datos) => {
let razas = Object.keys(datos.message);
let contenedor = document.getElementById('mostrarp');
contenedor.innerHTML = '';

razas.forEach((raza) => {
let archivofoto = 'https://dog.ceo/api/breed/' + raza + '/images/random';

fetch(archivofoto)
.then((rpta) => {
return rpta.json();
})
.then((foto) => {
let div = document.createElement('div');
div.innerHTML = `
<p>${raza}</p>
<img src="${foto.message}" alt="${raza}">
`;
contenedor.appendChild(div);
})
.catch((e) => {
alert('Error al leer: ' + e);
});
});
})
.catch((e) => {
alert('Error al leer: ' + e);
});
});