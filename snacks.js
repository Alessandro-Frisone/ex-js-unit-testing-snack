//----------------------------------------SNACK 1--------------------------------------------// 
function getInitials(nomeCompleto){
    const [ nome, cognome ] = nomeCompleto.split(" ").filter(str => str !== ``)
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`
}

//----------------------------------------SNACK 2/4/6--------------------------------------------// 
function createSlug(titolo){
    if(!titolo){
        throw new Error ("titolo non valido")
    }
    return titolo.toLowerCase().replaceAll(" ", "-")
}

//----------------------------------------SNACK 3--------------------------------------------// 
function avarage(numeri) {
  numeri.forEach(numero => {
    if(isNaN(numero)){
        throw new error("Avarage vuole solo numeri!")
    }
  })
  return numeri.reduce((acc, numero) => acc+ numero, 0) / numeri.length
}

//----------------------------------------SNACK 5--------------------------------------------//
function isPalidrome(parola){
    const parolaInversa = parola.trim().split(``).reverse().join(``)
    return parola.trim() === parolaInversa
}

//----------------------------------------SNACK 7--------------------------------------------//
function findPostById(posts, id){
    if(isNaN(id)){
        throw new Error(`"${id}" non è un id`)
    }
    posts.forEach(p => {
        if(
            p.id === undefined || 
            p.title === undefined || 
            p.slug === undefined 
        ){
            throw new Error(`L'array posts non è nel formato corretto`)
        }
    })
    return posts.find(p => p.id === id) || null
}



module.exports = {
    getInitials,
    createSlug,
    avarage,
    isPalidrome,
    findPostById
}