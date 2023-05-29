var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);




function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'JgzkfO8nYKo',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "JgzkfO8nYKo"
    },
    events: {
      // 영상이 준비되었을 때
      onReady: function (event)  {
        event.target.mute(); // 음소거
      },
    },
  });
}

