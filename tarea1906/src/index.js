const colors = require('colors');
const express = require('express');
const vta = require('./ventas.js');
const puerto = 3000;

console.clear();
//console.log(vta.ventas);
const app = express();

app.use(express.json())

app.get('/', (pet, resp)=>{
    resp.send('algo veremos en este proyecto')
})

app.get('/ventas', (pet, resp)=>{
    resp.send(vta.ventas);
})

app.get('/ventas/vendedor', (pet, resp)=>{
    resp.send(vta.ventas.vendedor)
});

// ventas-vendedor consultar por id mostrar todos los datos
app.get('/ventas/vendedor/:id', (pet, resp)=>{
    let buscaId = pet.params.id;
    let vende = vta.ventas.vendedor.find(vendeId => vendeId.id == buscaId )
    if (vende == undefined) {
        resp.send(`El vendedor con código ${buscaId} no existe !!`)
    } else {
        resp.send(`Código: ${vende.id}\nNombre: ${vende.nombre}\nPais: ${vende.Pais}\nCiudad: ${vende.ciudad} \nComisión: ${vende.comision} `)
    }
});

// ventas-vendedor consultar por nombre mostrar id, ciudad, pais
app.get('/ventas/vendedor/buscapornombre/:nom', (pet, resp)=>{
    let buscanom = pet.params.nom;
    let vendenom = vta.ventas.vendedor.filter(vende => vende.nombre.includes(buscanom))
    if (vendenom.length > 0) {
        resp.send(vendenom)
    } else {
        resp.send(`El vendedor con nombre ${buscanom} no existe !!`)
    }
});

// ventas-vendedor mostrar ordenado asc por nombre
app.get('/ventas/vendedor/ordena/nom', (pet, resp)=>{
   resp.send(vta.ventas.vendedor.sort( (a,b)=> a.nombre.localeCompare(b.nombre)))
});

// ventas-vendedor mostrar ordenado asc por pais
app.get('/ventas/vendedor/ordena/pais', (pet, resp)=>{
    resp.send(vta.ventas.vendedor.sort( (para, parab)=> para.Pais.localeCompare(parab.Pais)))
});

// ventas-vendedor mostrar ordenado asc por comi
app.get('/ventas/vendedor/ordena/comi', (pet, resp)=>{
    resp.send(vta.ventas.vendedor.sort( (para, parab)=> para.comision - parab.comision))
});


// ventas-vendedor aquellos que vivan en el pais
app.get('/ventas/vendedor/vivenpais/:pais', (pet, resp)=>{
    let vivepais = pet.params.pais;
    let vendepais = vta.ventas.vendedor.filter(vende => vende.Pais.includes(vivepais));
    if (vendepais.length > 0) {
        resp.send(vendepais)
    } else {
        resp.send(`No hay vendedores en ese pais`)
    }

});

// ventas-vendedor que tengan una comision superior a ...
app.get('/ventas/vendedor/comisup/:comi',(pet, resp)=>{
    let comi = pet.params.comi;
    let vendecomi = vta.ventas.vendedor.filter(vende => vende.comision >= comi);
    if (vendecomi.length > 0) {
        resp.send(vendecomi)
    } else {
        resp.send(`no existen comisiones superiores a ${vendecomi.comi}`)
    }

});

// ventas-vendedor de tal pais y tal ciudad
app.get('/ventas/vendedor/porpaisciu/:pais/:ciu',(pet, resp)=>{
    let buscapais = pet.params.pais;
    let buscaciu = pet.params.ciu;

    let vendepaisciu = vta.ventas.vendedor.filter(vende => vende.Pais.includes(buscapais) && vende.ciudad.includes(buscaciu));
console.log(vendepaisciu);
    if (vendepaisciu.length > 0) {
        resp.send(vendepaisciu)
    } else {
        resp.send(`No hay vendedores que residan en el páis ${buscapais} y en la ciudad ${buscaciu}`)
    }

});

// parametros por query
// ventas-vendedor de tal pais y comision superior a ...
app.get('/ventas/vendedor/filtro/paiscom',(pet, resp)=>{
    console.log(pet.query);
    let buscapais = pet.query.pais
    let buscacomi = Number( pet.query.comi)
   let filtrocomi =  vta.ventas.vendedor.filter(vende => vende.Pais.includes(buscapais) && vende.comision > buscacomi)
   //let filtrocomi =  vta.ventas.vendedor.filter(vende => vende.Pais.includes(buscapais) )
   if (filtrocomi.length > 0) {
        resp.send(filtrocomi)    
   } else {
    resp.send(`<h1>No hay vendedores que tengan comisiones superiores a ${buscacomi} y sean del país ${buscapais}</h1>` )
   }

})

app.listen(puerto,()=>{
    console.log(`servidor iniciando en el puerto ${puerto}`.magenta)
})
