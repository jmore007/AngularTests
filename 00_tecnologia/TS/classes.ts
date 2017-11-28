class Libro {

    private titulo: string;
    private autor: string;


    constructor (titulo, autor){
        this.titulo = titulo
        this.autor = autor
    }

    getTitulo (){
        return this.titulo;
    }
}

class LibroTecnico extends Libro{
    
    categoria: string;
    
    constructor(titulo, autor, categoria){
        super(titulo, autor);
        this.categoria = categoria;
    }

}

let oLibro = new Libro("La comunidad del anillo", "J.R.R. Tolkien")
console.log(`libro: ${oLibro.getTitulo()}`)

//El ; deja de ser obligatorio ni recomendado en ES6, en TypeScript sí es recomendado/obligatorio