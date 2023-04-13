const iframe = document.querySelector('iframe');
import { throttle } from 'lodash';
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(function () {
    getTime();
  }, 1000)
);

const getTime = () => {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
  });
};

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time'))
);
