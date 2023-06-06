// setTimeout() nos permitirá dilatar/extender los tiempos de carga

let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Saludo 1")
});


let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Saludo 2")
});


//Prueba 1 
//Ejecutando promesas en paraledo
// La que tiene menor tiempo en ms se ejecutará primero


// p1.then((res)=>{
//   console.log(res)
// });

// p2.then((res)=>{
//   console.log(res)
// });



// Prueba 2 

// Ejecutar la p2, despues de la p1 (SERIALIZADO)

// p1.then((res1)=>{
//   console.log(res1)
//   p2.then((res2)=>{
//     console.log(res2)
//     console.log("Proceso concluido")
//   })
// });


// Prueba 3 
// Ejecutar ambas promesas 

Promise.all([p1, p2]).then((respuestas)=>{
  console.log(respuestas);
  console.log("Proceso concluido")
});

