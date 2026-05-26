lista="lista.json"

document.getElementById("btn").onclick = () => 
    fetch(lista)
.then(res => res.json())
.then(datos => document.write(datos.name + " " + datos.age));