
// const iframe = document.querySelector('#vimeo-player');
// console.log(iframe);
// const player = new Vimeo.Player(iframe);
// console.log(player);
// player.on('play', function() {
//         console.log('played the video!');
// });
// player.getVideoTitle().then(function(title) {
// console.log('title:', title);
// });
import Player from '@vimeo/player';

const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});