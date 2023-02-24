"use strict";

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']


sounds.forEach(sound => {
    // create a button node with cls of "btn" value of sound
    const btn  = document.createElement('button');
    btn.classList.add("btn");
    btn.innerHTML = sound;
    
    // eventListner for btn for --> playing and pausing the sound
    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    })
    // appending  btn to buttons containers
    document.getElementById("buttons").appendChild(btn);
})


function stopSongs() {
    // stops the sound and resets the time -->  if playing
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}
