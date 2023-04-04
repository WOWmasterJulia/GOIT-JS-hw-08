import { throttle } from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
console.log(iframe);
const player = new Vimeo.Player(iframe);
console.log(player);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
player.on('timeupdate', throttle((data) => {
    localStorage.setItem("videoplayer-current-time", String(data.seconds))
}, 100));

// import Player from '@vimeo/player';

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });