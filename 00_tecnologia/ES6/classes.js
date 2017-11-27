class libro {

    constructor (titulo, autor){
        this.titulo = titulo
        this.autor = autor
    }
}

let oLibro = new libro("La comunidad del anillo", "J.R.R. Tolkien")
console.log(`libro: ${oLibro.titulo}, autor: ${oLibro.autor}`)

//El ; deja de ser obligatorio ni recomendado en ES6, en TypeScript sí es recomendado/obligatorio