import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Vimeo(iframe);

currentTime = localStorage.getItem('currentVideoTime');

if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(evt) {
  localStorage.setItem('currentVideoTime', evt.seconds);
}
