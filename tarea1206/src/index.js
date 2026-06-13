const color=require(`colors`);
const express=require(`express`);
const ventas=require(`./ventas`)
const puerto=3333;
const app=express();

console.clear();
app.get(`/`,(pet,resp)=>{
    resp.send(`bienvenidosos`)
})
app.listen(puerto,()=>{
    console.log(`servidor iniciando en el puerto ${puerto}`.magenta)
})
app.get(`/ver`,(pet,resp)=>{
    resp.send(ventas)
})


app.get(`/ver/clientes`,(pet,resp)=>{
    resp.send(ventas.ventas.cliente)
})
app.get(`/ver/verped`,(pet,resp)=>{
    resp.send(ventas.ventas.pedidos)
})
app.get(`/ver/vervend`,(pet,resp)=>{
    resp.send(ventas.ventas.vendedor)
})

app.get(`/ver/clientes/solonom`,(pet,resp)=>{
    resp.send(ventas.ventas)
})


