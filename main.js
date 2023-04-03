const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "15c04215dfmsh47b152db5b5c176p1edfc4jsn455d1e039959",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

async function idArtist() {
    await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=faith%20no%20more`, options)
    .then((response) => response.json())
    .then((response) => console.log(response.data[0].artist.id))
    .catch((err) => console.error(err));


}

async function artist() {
    await fetch(`https://deezerdevs-deezer.p.rapidapi.com/artist/2255`, options)
    .then((response) => response.json())
    .then((response) => console.log(response.name))
    .catch((err) => console.error(err));

}

artist();
idArtist();

const artistaId = document.querySelector(".artistaId");
artistaId.innerHTML = `<span>${idArtist()}</span>`;


