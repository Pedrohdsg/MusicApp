const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "15c04215dfmsh47b152db5b5c176p1edfc4jsn455d1e039959",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

function idArtist() {
    
  const musicas = [];
  const musicasLink = [];
  let inputArtist = document.getElementById("artistInput").value;

  const ok = document.getElementById('okBtn');
  ok.style.display = 'none'

  const limpar = document.getElementById('limparBtn')
  limpar.style.display = 'inline'

  if (inputArtist != "") {
    fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${inputArtist}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 25; i++) {
          musicas.push(response.data[i].title);
          musicasLink.push(response.data[i].link);
        }

        fetch(
          `https://deezerdevs-deezer.p.rapidapi.com/artist/${response.data[0].artist.id}`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            const e = document.createElement("ul");
            e.classList.add("artistUl");
            document.body.style.backgroundImage = `url('${response.picture_big}')`;
            document.getElementById("artistName").appendChild(e).innerHTML = `

       <li class="artista"><a href="${response.link}" target="_blank">${response.name}</a></li>
        <img class="artistImg" src="${response.picture}" alt="">
       <p class="musics">Músicas:</p>
       `;
            const musicList = document.createElement("ul");
            musicList.classList.add("musicLi");
            console.log(musicList);

            for (let i = 0; i < 25; i++) {
              const e = document.createElement("li");
              e.classList.add("musicLi");
              document.getElementById("artistName").appendChild(e).innerHTML = `
      <a href="${musicasLink[i]}" target="_blank">${musicas[i]}</a>
       `;
            }
          })
          .catch((err) => console.error(err));

        console.log(response);
      })

      .catch((err) => {
        console.error(err);
        alert("Artista não encontrado!");
        recarregarPágina();
      });
  }
}

function recarregarPágina() {
  location.reload()
}
