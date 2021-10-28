import Player from '@vimeo/player';
import throttle from "lodash.throttle"

const iframeRef = document.querySelector('iframe#vimeo-player');
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const player = new Player(iframeRef);
const getVideoTime = localStorage.getItem(LOCALSTORAGE_KEY);

if (getVideoTime) {
        player.setCurrentTime(getVideoTime)
    }
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
    let { seconds } = event;
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}

    

