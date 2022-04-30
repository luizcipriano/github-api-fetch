const box = document.querySelector('.box_user');

async function puxarDados() {
  try {
    const name = document.querySelector('.name').value;
    const dadosResponse = await fetch(`https://api.github.com/users/${name}`);
    const dadosJSON = await dadosResponse.json();
    const img = dadosJSON.avatar_url;
    const user = dadosJSON.name;
    const loc = dadosJSON.location;
    const bio = dadosJSON.bio;
    if(img == undefined){
     alert('Usuario não encontrado tente novamente');
    } else {
      box.innerHTML = `<img src="${img}" alt=""> <p class="user">${user}</p> <p class="user">${bio}</p>  <p class="user">${loc}</p>`
    }
    
    // document.body.innerText = dadosJSON.titulo;
  }
  catch(erro) {
    console.log(erro);
  }
}