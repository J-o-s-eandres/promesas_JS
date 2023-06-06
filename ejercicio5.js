//Encadenar promesas

function primeraPromesa(){
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, "Promesa 1" )
  })
}

function segundaPromesa(valorEntrada){
  console.log(valorEntrada);
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, 500, "Promesa 2" )
  })
}

// ¿Cómo la promesa 1, pasa un valor a la promesa 2?
// 1. la promesa 2, debe recibir parámetros de entrada

// Versión Inicial 
// primeraPromesa()
//   .then(segundaPromesa)
//   .then((res)=>{
//     console.log(res)
//   })

primeraPromesa()
  .then(segundaPromesa)
  .then((res)=>{
    console.log(res)
  })


