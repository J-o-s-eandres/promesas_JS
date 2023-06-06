// funciones asincronas

async function sumar(n1, n2){
  // El retorno construye y asume resolve para la promesa IMPLÍCITA
  return n1 + n2 
}


async function calcular(){
  // setTimeout(callback, tiempoEspera, resultado)
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, 4)
  })  
}


// El resultado sera una promesa con el valor(6) Promise {6}
// El estado pendiente no se muestra ya que se ejecuta INMEDIATAMENTE
console.log(sumar(1,5))

//Proceso pendiente(espera..)
console.log(calcular())

// ¿Cómo vamoe le valor que nos trae la promesa en la función calcular()?
calcular()
  .then((res) =>{
    console.log(res)
  })

  