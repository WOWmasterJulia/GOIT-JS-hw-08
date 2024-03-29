// ------------------------ВАРИАНТ 1-----------------
// import throttle from 'lodash.throttle';
// import Player from '@vimeo/player';
// console.log(throttle);


// const iframe = document.querySelector('#vimeo-player');
// console.log(iframe);
// const player = new Player(iframe);
// console.log(player);

// player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);
// player.on('timeupdate', throttle((data) => {
//     localStorage.setItem("videoplayer-current-time", String(data.seconds))
// }, 1000));

// -----------------------------ВАРИАНТ 2-----------------
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');    
const player = new Player(iframe);
const keyCurrentTime = "videoplayer-current-time"; 

// player.on('play', function() {
//     console.log('played the video!');
// });
//  player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//  });
    
//  ___________

const onPlay = function(currentTime) {
  const seconds = currentTime.seconds;
   console.log('seconds:', seconds);
    // localStorage.setItem(keyCurrentTime, JSON.stringify(seconds)); 
    localStorage.setItem(keyCurrentTime, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const timeStop = Number(localStorage.getItem((keyCurrentTime) || 0));
    console.log('keyCurrentTime', timeStop); 
// console.log(typeof(timeStop)); 

//___________

player.setCurrentTime(timeStop).then(function(second) {
//   second = 0.001;
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:           
            break;
    }
});