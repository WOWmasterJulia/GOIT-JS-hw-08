
const iframe = document.querySelector('#vimeo-player');
console.log(iframe);
const player = new Vimeo.Player(iframe);
console.log(player);
player.on('play', function() {
        console.log('played the video!');
    });