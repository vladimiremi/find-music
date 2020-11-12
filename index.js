
//Lista as musicas
let musica = document.querySelectorAll('._5845794624a406a62eb5b71d3d1c4d63-scss');

let listaMusica = [];

for(i = 1; i <= musica.length; i++){
   
   let unidade = musica[i].textContent;
    listaMusica.push(unidade);

}
