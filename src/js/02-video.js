import Player from '@vimeo/player';


const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);

const localStorage = "videoplayer-current-time";
let videoTime = {seconds: 0};

player.on('timeupdate', onPlay);

function onPlay(event) {
    videoTime = event;
    console.log(videoTime.seconds)
}
player.setCurrentTime(videoTime.seconds)
// player.setCurrentTime(videoTime.seconds);