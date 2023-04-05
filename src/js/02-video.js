import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
console.log(throttle);


const iframe = document.querySelector('#vimeo-player');
console.log(iframe);
const player = new Player(iframe);
console.log(player);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);
player.on('timeupdate', throttle((data) => {
    localStorage.setItem("videoplayer-current-time", String(data.seconds))
}, 1000));

// import Player from '@vimeo/player';
// const iframe = document.querySelector('#vimeo-player');
// const player = new Player(iframe);

// player.on('play', function() {
//     console.log('played the video!');
// });