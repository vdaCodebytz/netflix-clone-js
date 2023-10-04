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
