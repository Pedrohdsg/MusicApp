const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "15c04215dfmsh47b152db5b5c176p1edfc4jsn455d1e039959",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

function idArtist() {
  let inputArtist = document.getElementById("artistInput").value;

  if (inputArtist != "") {
    fetch(
      `https://spotify23.p.rapidapi.com/search/?q=${inputArtist.replace(
        " ",
        ""
      )}&type=multi&offset=0&limit=10&numberOfTopResults=5`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.artists.items[0].data.profile);
        const element = document.createElement("ul");
        console.log(element)
        document.getElementById("artistName").appendChild(element).innerHTML = `
      <li class="artistLi" id="listaId">${response.artists.items[0].data.profile.name}</li>
      <img class="artistImg" src="${response.artists.items[0].data.visuals.avatarImage.sources[0].url}" alt="">
      <ul class="albumUl" id="albumIdUl">Álbuns:</ul>`

      
      

      for(let i = 0; i < 10; i++){
        const album = document.createElement("div");
        album.classList.add('albumClass')
        document.getElementById("artistName").appendChild(album).innerHTML = `      
        <img class="albumImg" src="${response.albums.items[i].data.coverArt.sources[0].url}" alt="">
        <p>${response.albums.items[i].data.name} - ${response.albums.items[i].data.date.year}</p>        
        `}
      ;
      })
      .catch((err) => console.error(err));

    // fetch(
    //   `https://deezerdevs-deezer.p.rapidapi.com/search?q=${inputArtist.replace(" ","")}`, options)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     fetch(
    //       `https://deezerdevs-deezer.p.rapidapi.com/artist/${response.data[0].artist.id}`,
    //       options
    //     )
    //       .then((response) => response.json())
    //       .then((response) => {
    //         const e = document.createElement("ul");
    //         document.getElementById("artistName").appendChild(e).innerHTML = `

    //   <li class="artista"><a href="${response.link}">${response.name}</a></li>
    //   <img class="artistImg" src="${response.}" alt="">
    //   `;

    //       })
    //       .catch((err) => console.error(err));
    //     console.log(response)
    //   })

    //   .catch((err) => console.error(err));
  }
}

fetch(
  "https://spotify23.p.rapidapi.com/search/?q=faith%20no%20more&type=multi&offset=0&limit=10&numberOfTopResults=5",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

//   for(let i = 0; i < 10; i++){}
