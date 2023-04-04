const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "15c04215dfmsh47b152db5b5c176p1edfc4jsn455d1e039959",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

function idArtist() {

  let inputArtist = document.getElementById("artistInput").value;
  console.log(inputArtist);

  

  if (inputArtist != "") {
    fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${inputArtist}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {

        fetch(
          `https://deezerdevs-deezer.p.rapidapi.com/artist/${response.data[0].artist.id}`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            const e = document.createElement("ul");
            document.getElementById("artistName").appendChild(e).innerHTML = `
      
      <li class="artista"><a href="${response.link}">${response.name}</a></li>
      <img class="artistImg" src="${response.picture_big}" alt="">
      `;

          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }
}

fetch(`https://deezerdevs-deezer.p.rapidapi.com/artist/2255`, options)
  .then((response) => response.json())
  .then((response) => console.log(response));

fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=faith%20no%20more', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));