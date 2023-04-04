const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "15c04215dfmsh47b152db5b5c176p1edfc4jsn455d1e039959",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};



function idArtist() {
  fetch(
    `https://deezerdevs-deezer.p.rapidapi.com/search?q=faithnomore`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const e = document.createElement("p");
      document
        .getElementById("artistName")
        .appendChild(
          e
        ).innerHTML = `<div hidden id="search">${response.data[0].artist.id}</div>`;
      let pesquisaId = document.getElementById("search").innerHTML;
      console.log(pesquisaId);

      fetch(`https://deezerdevs-deezer.p.rapidapi.com/artist/${pesquisaId}`, options)
        .then((response) => response.json())
        .then((response) => {
          const e = document.createElement("ul");
          document.getElementById("artistName").appendChild(e).innerHTML = `
      
      <li class="artista"><a href="${response.link}">${response.name}</a></li>
      <img src="${response.picture_medium}" alt="">
      `;
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
}

fetch(`https://deezerdevs-deezer.p.rapidapi.com/artist/2255`, options)
  .then((response) => response.json())
  .then((response) => console.log(response));



idArtist();
