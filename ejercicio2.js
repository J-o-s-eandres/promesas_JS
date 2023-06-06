let request = require("request-promise");

// me comunico y espero una promesa -> las promesas retornan OBJETOS
let promesa = request('https://www.senati.edu.pe');

//Se administran utilizando 
//fullfiled = fue completada con éxito
promesa.then(function(){
  console.log('URL cargada');
});

// reject = rechazado
promesa.catch(function (error){
  console.log('Falló la consulta');
  console.log(error);
})

// Siempre se ejecuta al finalizar la promesa (con error o no)
// settled= finalizado
promesa.finally(function (){
  console.log("Promesa finalizada")
});