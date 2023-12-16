import { music } from "./music.js";

const audio = document.querySelector('.player')
const musicName = document.querySelector('.text-details')
const playerPauseBtn = document.querySelector('.startPause-btn')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const progressBar = document.querySelector('.progress-bar')
const progress = document.querySelector('.progress')
const duration = document.querySelector('.duration')
const currentTime = document.querySelector('.currentTime')

// as variaveis do efeito do play e pause button
const textButtonPlay = '<span class="material-symbols-outlined">play_circle</span>'
const textButtonPause = '<span class="material-symbols-outlined">pause</span>'

let index = 0

musicName.innerHTML = music[index].name

const playPause = () => {
    if (audio.paused) {
        audio.src = music[index].src
        audio.play()
        playerPauseBtn.innerHTML = textButtonPause
        updateTime()
    } else {
        audio.pause()
        playerPauseBtn.innerHTML = textButtonPlay
    }
}

const prevAudio = () => {
if (index <= 0) {
        index = music.length
    } else {
        index--
        musicName.innerHTML = music[index].name
        console.log(index)
    }
}

const nextAudio = () => {
if (index >= music.length) {
        index = 0
    } else {
        index++
        musicName.innerHTML = music[index].name
        console.log(index)
    }
}

const updateTime  = () => {
    const currentMinutes = Math.floor(audio.currentTime / 60)
    const currentSeconds = Math.floor(audio.currentTime % 60)
    currentTime.textContent = currentMinutes + ':' + formatZero(currentSeconds)

    const durationFormatted = isNaN(audio.duration) ? 0 : audio.duration
    
    const durationMinutes = Math.floor(durationFormatted / 60)
    const durationSeconds = Math.floor(durationFormatted % 60)
    duration.textContent = durationMinutes + ':' + formatZero(durationSeconds)

    const progressWidth = durationFormatted ? (audio.currentTime / durationFormatted) * 100 : 0

    progress.style.width = progressWidth + '%'
}

const formatZero = (n) => { return n < 10 ? '0' + n : n};

playerPauseBtn.addEventListener('click', playPause)
prevBtn.addEventListener('click', prevAudio)
nextBtn.addEventListener('click', nextAudio)
audio.ontimeupdate = () => updateTime()