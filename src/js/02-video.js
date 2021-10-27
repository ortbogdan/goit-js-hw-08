import Player from '@vimeo/player';
import throttle from "lodash.throttle"

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
    let { seconds } = event;
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}
const getVideoTime = localStorage.getItem(LOCALSTORAGE_KEY);
player.setCurrentTime(getVideoTime)
