const videoContainer = document.querySelector(".video-container");

videoContainer.addEventListener("ended", (e) => {
  e.target.style.display = "none";
});

function onYouTubeIframeAPIReady() {
  var player = new YT.Player("player", {
    height: "540",
    width: "720",
    muted: "1",
    videoId: "0N0R50cu-P0", // Replace with the actual video ID
    playerVars: {
      key: "AIzaSyAqfG8WUZMD-9kQxFmX-rY8nhFo5UrKGWg", // Replace with your API key
      controls: "0",
      end: "10",
      rel: "0",
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerStateChange(event) {
  if (event.data === 0) {
    document.querySelector("#player").style.opacity = "0";
  }
}
function onPlayerReady(event) {
  event.target.playVideo(); // Auto-play the video when ready
  event.target.mute();
}

const url = "https://imdb-top-100-movies.p.rapidapi.com/";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "60b3e8602fmsh6ea0511791b6d5ap1637bcjsn92dec7726b7e",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

let cards = document.querySelectorAll(".card");

const getData = async (url, options) => {
  let response = await fetch(url, options);
  let result = await response.json();

  let titleMovieNumber = Math.floor(Math.random() * 100 + 1);

  let title = document.querySelector(".hero-content-left h1");
  let desc = document.querySelector(".hero-content-left p");
  let heroPoster = document.querySelector(".hero-poster");

  title.innerHTML = result[titleMovieNumber].title;
  desc.innerHTML = result[titleMovieNumber].description;
  heroPoster.src = result[titleMovieNumber].image;

  cards.forEach((card) => {
    let cardImage = document.createElement("img");
    card.appendChild(cardImage);
    let movieNumber = Math.floor(Math.random() * 100 + 1);
    let thumbnailLink = result[movieNumber].image;
    card.childNodes[0].src = `${thumbnailLink}`;
  });
};
// console.log(cards);

getData(url, options);
