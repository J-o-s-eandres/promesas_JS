// El operador await(esperar) funciona UNICAMENTE en funciones asíncronas 
// SyntaxError: await is only valid in async functions and the top level bodies of modules

// let promesa = new await Promise((resolve, reject )=>{
//   setTimeout(resolve, 1000, 20)
// });

// promesa
//   .then((resultado)=>{console.log(resultado)})


async function testPromesas(){
  let promesa1 = await new Promise((resolve, reject)=>{
    setTimeout(resolve,1000, 20)
  });
  let promesa2 = await new Promise((resolve, reject)=>{
    setTimeout(resolve,500, 10)
  });


  console.log(promesa1 + promesa2)
}

testPromesas();