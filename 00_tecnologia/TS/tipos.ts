interface Usuario{
    nombre: string;
    apellidos: string;
}

class Tipos {
    algo: any; //Aqui puede haber cualquier tipo
    id: number | string;
    sNombre: string;
    nEdad: number;
    isAlumno: boolean;
    aDatos: Array<string>;
    aNumber: number[];
    oUser: Usuario;

    constructor(nombre, apellidos){
        //this.oUser.nombre = nombre;
        //this.oUser.apellidos = apellidos;
        this.oUser =  {nombre: nombre, apellidos: apellidos};
    }

    mostrar(){
        return 2;
    }
}
let oTipos = new Tipos("Juan", "Perez");
console.log(`Mi usuario es: ${oTipos.oUser.nombre} ${oTipos.oUser.apellidos}`);

//Tipica1 hace lo mismo que Tipica2

class Tipica1 {
    uno;
    dos;
    constructor(uno, dos){
        this.uno = uno;
        this.dos = dos;
    }
}

class Tipica2 {
    dos;
    constructor(public uno: string, dos){
        this.dos = dos;
    }
}