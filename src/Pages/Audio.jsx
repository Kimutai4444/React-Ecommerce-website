import React, { useState } from "react";

function AudioPlayer() {
    let songs = [
      {
        Name: "song1",
        songpath: "/audio/chilled-acoustic-indie-folk-ig-version-60s-9648.mp3",
      },
      {
        Name: "song2",
        songpath: "/audio/town-10169.mp3",
      },
    ];

    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(new Audio());
  
    const toggleAudio = () => {
        setIsPlaying(!isPlaying);
        console.log(isPlaying);
        //audio.src=songs[0].songpath

      if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
      }
    };
    
    function play(path){
        audio.src = path
        audio.play();
        setIsPlaying(true)
    }

  return (
    <div className="audio">
      <h1>Simple Audio Player</h1>
          <button onClick={toggleAudio}>{isPlaying ? "Pause" : "Play"}</button>
          {
             songs.map((songs,index)=>{
              return<div onClick={()=>play(songs.songpath)}>
              {songs.Name}
              </div>
          }) 
}
          
    </div>
  );
}

export default AudioPlayer;
