const timerEl = document.getElementById('timer');
const marksList = document.getElementById('mark-list');
let intervalId = 0;
let timer = 0;
let marks = [];

const formatTime = (time) => {
  const hours = Math.floor(time / 360000)
  const min = Math.floor((time % 360000) / 6000);
  const segs = Math.floor((time % 6000) / 100); 
  const hundredths = time % 100;

  return `${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`
}

const ligaOtimer = () => {
  const btn = document.getElementById('play-pause');
  const action = btn.getAttribute('action');

  clearInterval(intervalId);
  
  if (action == "start" ||  action == 'continue') {
    intervalId = setInterval(() => {
      timer += 1;
      setTimer(timer)
    }, 10);
    btn.setAttribute('action', 'pause');
    btn.innerHTML = '<i class="fa-solid fa-pause"></i>'
  } else if(action == 'pause') {
    btn.setAttribute('action', 'continue');
    btn.innerHTML = '<i class="fa-solid fa-play"></i>'
  }
}

const setTimer = (time) => {
  timerEl.innerHTML = formatTime(time);
}

document.getElementById('play-pause').addEventListener("click", ligaOtimer)