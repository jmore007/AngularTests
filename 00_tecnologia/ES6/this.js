
let oPrueba = {
    precio: 12,
    iva: 1.16
};


oPrueba.calculaIva = function (){
    setTimeout (() =>{
        let precioFinal = this.precio * this.iva
        console.log(` 
        Oferta: El precio final es ${precioFinal}
        `);
    }, 1000);
}

oPrueba.calculaIva();