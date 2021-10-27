import Player from '@vimeo/player';
import throttle from "lodash.throttle"

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(event));
}
const getVideoTime = localStorage.getItem(LOCALSTORAGE_KEY);
const videoTimeParse = JSON.parse(getVideoTime)
player.setCurrentTime(videoTimeParse.seconds)
