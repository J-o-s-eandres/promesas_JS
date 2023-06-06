//Funciones tradicionales

// function saludar(nombre){
//   return `Bienvenido ${nombre}`
// }


// function mostrarAmigos(){
//   return ['Raul', 'Luis', 'Juan']
// }

// let r1 = saludar('Joseandres')
// console.log(r1)             //forma 1 
// console.log(mostrarAmigos()) // forma 2


// objeto 
// Función flecha / parámetro
const perfil = {
  'apellidos'    : 'Montesino' ,
  'nombres'      : 'Joseandres Gabriel',
  'edad'         : 23,
  'estaCasado'   : false,
  'amigos'       : ['Raul', 'Juan', 'Diego', 'Piero'],
  'contacto'     : {
    'telefonos'  : ['912396245'],
    'ciudad'     : 'Chincha',
    'casaPropia' : false
  },
  'skill'        : function (){
    //console.log("Yo programo")
    return "Yo se programar"
  }
}

console.log(perfil.skill())