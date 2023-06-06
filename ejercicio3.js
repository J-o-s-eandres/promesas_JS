let request = require("request"); // acceder a URLS remotas

// está funcion retorna una promesa... then() catch() finally()
// La clase Promise requiere de un executor(resolver y rechazado)
// callback => función que retorna valor
function loadPage(url){
  return new Promise(function (resolve, reject){
    request(url, function(error,response){
      if(error) return reject(error)
      resolve(response)
    })
  })
}

let promesa = loadPage('https://www.senati.edu.pe');

// Nos devuelve => Promise { <pending> }
// console.log(promesa)


promesa.then(function(){
  console.log('URGL Cargada...')
}).catch(function (){
  console.log("Problema al cargar")
})