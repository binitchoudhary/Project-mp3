console.log("Welcome to relax MP3");
//Initialize the variables
let songsIndex=0;
let audioElement = new Audio("songs/5.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItem =  Array.from(document.getElementsByClassName('songItem'));
let timestamp =  Array.from(document.getElementsByClassName('timestamp'));

let songs = [
  {songsName: "Let me love you",filePath: "songs/1.mp3",coversPath: "covers/1.jpg"},
  {songsName: "Brown Munde",filePath: "songs/2.mp3",coversPath: "covers/2.jpg"},
  {songsName: "Gallan karye",filePath: "songs/3.mp3",coversPath: "covers/3.jpg"},
  {songsName: "Rim Jim",filePath: "songs/4.mp3",coversPath: "covers/4.jpg"},
  {songsName: "Rooh",filePath: "songs/5.mp3",coversPath: "covers/5.jpg"},
  {songsName: "We Rollin",filePath: "songs/6.mp3",coversPath: "covers/6.jpg"},
  {songsName: "Mast Nazro Se",filePath: "songs/7.mp3",coversPath: "covers/7.jpg"},
  {songsName: "Bijli",filePath: "songs/8.mp3",coversPath: "covers/8.jpg"},
  {songsName: "Meri Jaan Meri Jaan",filePath: "songs/9.mp3",coversPath: "covers/9.jpg"},
  {songsName: "Naah Goriye",filePath: "songs/10.mp3",coversPath: "covers/10.jpg"},
  {songsName: "Naah Goriye",filePath: "songs/11.mp3",coversPath: "covers/11.jpg"}
];

songItem.forEach((element,i) => {
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coversPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songsName; 
});

// audioElement.play();
//handle pause /play click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })

}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        makeAllPlays();
        songsIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songsIndex}.mp3`;
        masterSongName.innerText=songs[songsIndex].songsName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       
    })
})

document.getElementById("next").addEventListener('click', ()=>{
    if(songsIndex>=9){
        songsIndex=0;
    }
    else{
        songsIndex +=1;
        audioElement.src = `songs/${songsIndex}.mp3`;
        masterSongName.innerText=songs[songsIndex].songsName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
})
document.getElementById("previous").addEventListener('click', ()=>{
    if(songsIndex<=0){
        songsIndex=0;
    }
    else{
        songsIndex -=1;
        audioElement.src = `songs/${songsIndex}.mp3`;
        masterSongName.innerText=songs[songsIndex].songsName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
})

document.getElementsByClassName('timestamp').duration