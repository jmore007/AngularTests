var data = [{precio: 12}, {precio: 14}, {precio: 9}];
/*
data.forEach(function(elem){
    elem.precio++;
})
*/

data.forEach( elem => {
    if (true){
        //Diferencias const, let: const no se puede modificar, let si.
        const iva = 1.16
        let precioFinal = elem.precio * iva
        //Es obligatorio usar ` y no usar ', "
        console.log(` 
        Oferta: El precio final es ${precioFinal}
        `);
    }
});

data.forEach(elem => elem.precio++)