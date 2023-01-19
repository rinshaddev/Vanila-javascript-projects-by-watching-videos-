sounds = ["applaus", "gasp", "boo", "wrong", "victory", "tada"]


sounds.forEach(element => {
    const  btn = document.createElement("button")
      btn.classList.add('btn')
      btn.innerText = element;
        btn.addEventListener("click", ()=> {
            stopSongs();
            document.getElementById(element).play()
        })
    
    document.getElementById("buttons").appendChild(btn)


});


function stopSongs(){
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime =0
  })
}
