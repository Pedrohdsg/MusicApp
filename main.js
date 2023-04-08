const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "15c04215dfmsh47b152db5b5c176p1edfc4jsn455d1e039959",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

async function idArtist() {
  const musicas = [];
  const musicasLink = [];

  let inputArtist = document.getElementById("artistInput").value;

  if (inputArtist != "") {
    await fetch(
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
            e.classList.add('artistUl')
            document.getElementById("artistName").appendChild(e).innerHTML = `

      <li class="artista"><a href="${response.link}">${response.name}</a></li>
      <img class="artistImg" src="${response.picture_big}" alt="">
      <p>Músicas:</p>
      `;
            const musicList = document.createElement("ul");
            musicList.classList.add("musicLi");
            console.log(musicList)

            for (let i = 0; i < 25; i++) {
              const e = document.createElement('li')
              e.classList.add('musicLi')
              document.getElementById("artistName").appendChild(e).innerHTML = `
      <a href="${musicasLink[i]}">${musicas[i]}</a>
       `;
           
            }
          })
          .catch((err) => console.error(err));

        console.log(response);
      })

      .catch((err) => console.error(err));
  }
}

// fetch(
//   `https://spotify23.p.rapidapi.com/search/?q=${inputArtist.replace(
//     " ",
//     ""
//   )}&type=multi&offset=0&limit=10&numberOfTopResults=5`,
//   options
// )
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response.artists.items[0].data.profile);
//     const element = document.createElement("div");
//     console.log(element)
//     document.getElementById("artistName").appendChild(element).innerHTML = `
//   <li class="artistLi" id="listaId">${response.artists.items[0].data.profile.name}</li>
//   <img class="artistImg" src="${response.artists.items[0].data.visuals.avatarImage.sources[0].url}" alt="">
//   <ul id="albumId">Álbuns:</ul>`

//   for(let i = 0; i < 10; i++){
//     const album = document.getElementById('albumId')
//    // const album = document.createElement("li");
//     album.classList.add('albumUl')
//     console.log(album)
//     album.appendChild(album).innerHTML = `<li>
//     <img class="albumImg" src="${response.albums.items[i].data.coverArt.sources[0].url}" alt="">
//     <p>${response.albums.items[i].data.name} - ${response.albums.items[i].data.date.year}</p>
//     </li>
//     `
//     // document.getElementById("albumId").appendChild(album).innerHTML = `
//     // <img class="albumImg" src="${response.albums.items[i].data.coverArt.sources[0].url}" alt="">
//     // <p>${response.albums.items[i].data.name} - ${response.albums.items[i].data.date.year}</p>
//     // `
//   }
//   ;
//   })
//   .catch((err) => console.error(err));

// fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/2255", options)
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => console.error(err));

// fetch(
//   "https://deezerdevs-deezer.p.rapidapi.com/search?q=faith%20no%20more",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=gal%20costa', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
