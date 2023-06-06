let request = require("request");

// Comunicacion asincrona
request('https://www.senati.edu.pe', function(){
  console.log('URL cargada correctamente')
});

//Este método se ejecuta primero 
console.log('esto debe sucedes despues'); 