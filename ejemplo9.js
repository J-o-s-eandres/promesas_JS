//Consumir un API

async function showGitHutPersonal(){
  //fetch devuelve una promesa 
  let response = await fetch('https://api.github.com/users/J-o-s-eandres/repos')
  // json() retorna una promesa
  let listaRepos = await response.json();
  console.log(listaRepos.git_url);
}

showGitHutPersonal()


// function getRepos(){
//   fetch('https://api.github.com/users/J-o-s-eandres/repos')
//     .then(respuesta => respuesta.json())
//     .then(datos=>{
//       console.log(datos)
//     })
// }

// getRepos();