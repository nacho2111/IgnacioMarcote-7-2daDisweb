const color=require(`colors`);
const express=require(`express`);
const ventas=require(`./ventas`)
const puerto=3333;
const app=express();

console.clear();
app.get(`/`,(pet,resp)=>{
    resp.send(`bienvenidosos`)
})
//ves TODO
app.get(`/ver`,(pet,resp)=>{
    resp.send(ventas)
})

//ves los clientes
app.get(`/ver/clientes`,(pet,resp)=>{
    resp.send(ventas.ventas.cliente)
})

//ves los pedidos
app.get(`/ver/verped`,(pet,resp)=>{
    resp.send(ventas.ventas.pedidos)
})

//muestra los vendedores

app.get(`/ver/vervend`,(pet,resp)=>{
    resp.send(ventas.ventas.vendedor) 
})

//busqueda por parametro
app.get('/ventas/vendedor/buscapornombre/:nom', (pet, resp)=>{
    let buscanom = pet.params.nom;
    let vendenom = vta.ventas.vendedor.filter(vendeId => vendeId.id == buscaId )
    if (vendenom.length > 0) {
        resp.send(vendenom)
    } else {
        resp.send(`El vendedor con nombre ${buscanom} no existe !!`)
    }
});
app.get('/ver/buscar/vendedor/:id',(pet,resp)=>{
    let codigo = pet.params.id
    let resultado = ventas.ventas.vendedor.find(vendeId => vendeId.id == codigo )
    if (resultado != undefined) {
        resp.send(resultado)
    } else {
        resp.send('ese vendedor no existe')
    }
}
)
app.listen(puerto,()=>{
    console.log(`servidor iniciando en el puerto ${puerto}`.magenta)
})


app.get('/ver/buscar/pedidos/:pedido',(pet,resp)=>{
    let codigo = pet.params.precioCompra
    let codigo1 = pet.params.fechaPedido
    let resultado = ventas.ventas.pedidos.find(vendeId => vendeId.id == codigo )
    if (resultado != undefined) {
        resp.send(resultado)
    } else {
        resp.send('ese pedido no existe')
    }
}
)





