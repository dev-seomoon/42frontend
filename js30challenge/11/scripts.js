
/*play and pause*/
const playButton = document.querySelector('.player__button.toggle');
const video = document.querySelector('video');

function togglePlay() {
    if (video.paused)
        video.play();
    else
        video.pause();
}

playButton.addEventListener('click', togglePlay);


/*progress bar - show progress rate*/
const bar = document.querySelector('.progress__filled');

function updateProgressBar() {
    let currTime = video.currentTime;
    let runTime = video.duration;
    let progressRate = currTime / runTime * 100;
    document.documentElement.style.setProperty('--progressRate', `${progressRate}%`);
}

video.addEventListener('timeupdate', updateProgressBar);

/*progress bar - react user click*/
const slide = document.querySelector('.progress');

function moveRuntime(progressRate) {
    let duration = video.duration;
    video.currentTime = duration * progressRate / 100;
}

function moveProgressBar(e) {
    let barLength = e.offsetX;
    let slideLength = 640;
    let progressRate = barLength / slideLength * 100;
    document.documentElement.style.setProperty('--progressRate', `${progressRate}%`);
    moveRuntime(progressRate);
}

slide.addEventListener('click', moveProgressBar);


/*skip buttons*/
const buttons = document.querySelectorAll('.player__button');

function skipVideo() {
    let second = video.currentTime + Number(this.dataset.skip);
    video.currentTime = second;
}

buttons[1].addEventListener('click', skipVideo);
buttons[2].addEventListener('click', skipVideo);


/*control volume*/
const volumeBar = document.querySelector('input[name=volume]');

function adjustVolume() {
    this.setAttribute('value', `${this.value}`);
    video.volume = this.value;
}

volumeBar.addEventListener('input', adjustVolume);

/*control speed*/
const speedBar = document.querySelector('input[name=playbackRate');

function adjustSpeed() {
    this.setAttribute('value', `${this.value}`);
    video.playbackRate = this.value;
}

speedBar.addEventListener('input', adjustSpeed);