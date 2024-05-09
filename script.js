const song = [ 
{
    title: "Final Masquerade",
    artist: "Linkin Park",
    year: "2014",
    album: "The Hunting Party",
    cover: "images/the-hunting-party.jpg",
    address: "227 W 27th St",
    time: "12:23 PM",  
    x: 21.5,
    y: 43,
    point: "o",
    wherefrom: "Student playing music on their phone while studying in classroom",
    audio: "audio/final_masquerade.mp3"
},
{
    title: "No Fear",
    artist: "Tactful",
    year: "2004",
    album: "Cafe del Mar - Volume 11",
    cover: "images/cafe_del_mar.jpg",
    address: "15 W 37th St",
    time: "12:57 PM",
    x: 31.5,
    y: 28.5,
    point: "o",  
    wherefrom: "Cafe playlist",
    audio: "audio/no_fear.mp3"
},
{
    title: "Made up in Blue",
    artist: "The Bats",
    year: "1987",
    album: "Daddy's Highway",
    cover: "images/daddys_highway.jpg",
    address: "520 5th Ave",
    time: "1:33 PM",
    x: 34.5,
    y: 17.5,
    point: "o",  
    wherefrom: "Walking by a store",
    audio: "audio/the_bats.mp3"
},
{
    title: "Dim the Light",
    artist: "Winston Reedy",
    year: "1983",
    album: "Dim the Light",
    cover: "images/dim_the_light.png",
    address: "337 W 37th St",
    time: "8:42 AM",
    x: 20,
    y: 22.2,
    point: "o",  
    wherefrom: "Parked car, closed windows",
    audio: "audio/dim_the_light.mp3"
},
{
    title: "Side to Side",
    artist: "Ariana Grande, Nicki Minaj",
    year: "2016",
    album: "Dangerous Woman",
    cover: "images/dangerous_woman.jpg",
    address: "519 8th Ave",
    time: "8:45 AM",  
    x: 21.2,
    y: 26.5,
    point: "o", 
    wherefrom: "Walking by a souvenir shop",
    audio: "audio/sidetoside.mp3"
},
{
    title: "Centerfield",
    artist: "John Fogerty",
    year: "1985",
    album: "Centerfield",
    cover: "images/centerfield.jpg",
    address: "525 8th Ave",
    time: "7:13 PM",  
    x: 21.5,
    y: 25,
    point: "o", 
    wherefrom: "Open door of a hotel lobby",
    audio: "audio/centerfield.mp3"
},
{
    title: "Wanna Be a Baller",
    artist: "Lil' Troy",
    year: "1998",
    album: "Sittin' Fat Down South",
    cover: "images/sittin_fat_down_south.jpg",
    address: "528 8th Ave",
    time: "7:14 PM",  
    x: 22.5,
    y: 25,
    point: "o", 
    wherefrom: "Man playing music outside of 7/11",
    audio: "audio/liltroy.mp3"
},
{
    title: "JACKIE BROWN",
    artist: "Brent Faiyaz",
    year: "2022",
    album: "WASTELAND",
    cover: "images/wasteland.jpg",
    address: "Just before the Nassau Ave stop",
    time: "9:19 PM",  
    x: 74.3,
    y: 79,
    point: "o",
    wherefrom: "Woman singing, acapella, no headphones",
    audio: "audio/jackiebrown.mp3"
},
{
    title: "Do It Again (Put Ya Hands Up)",
    artist: "JAY-Z, Amil, Beanie Sigel",
    year: "1999",
    album: "Vol. 3... Life and Times of S. Carter",
    cover: "images/vol3.jpg",
    address: "28 St, W 28th St",
    time: "2:10 PM",  
    x: 29.5,
    y: 45.3,
    point: "o",
    wherefrom: "People standing outside",
    audio: "audio/doitagain.mp3"
},
{
    title: "5B-Time Of Freedom",
    artist: "Joachim Tionga",
    year: "2022",
    album: "Mix 2 Tapes",
    cover: "images/5B.png",
    address: "28 St, 1189-1201 Broadway",
    time: "2:11 AM", 
    x: 28,
    y: 44.3,
    point: "o", 
    wherefrom: "Person standing outside, phone",
    audio: "audio/timeoffreedom.mp3"
},
{
    title: "WO WO",
    artist: "Minz",
    year: "2022",
    album: "WO WO",
    cover: "images/wowo.jpg",
    address: "1225 Broadway",
    time: "2:12 AM",  
    x: 28,
    y: 42.3,
    point: "o",
    wherefrom: "People selling at a table",
    audio: "audio/wowo.mp3"
},
{
    title: "Say So",
    artist: "Doja Cat",
    year: "2019",
    album: "Hot Pink",
    cover: "images/hot_pink.jpg",
    address: "1282 Broadway",
    time: "2:17 AM",  
    x: 28,
    y: 35,
    point: "o",
    wherefrom: "Citibiker",
    audio: "audio/sayso.mp3"
},
{
    title: "Rumour Has It",
    artist: "Adele",
    year: "2011",
    album: "21",
    cover: "images/21.jpg",
    address: "W 32nd St",
    time: "9:18 PM",  
    x: 27.8,
    y: 38,
    point: "o",
    wherefrom: "Street performer",
    audio: "audio/rumourhasit.mp3"
},
{
    title: "Halo",
    artist: "Beyonce",
    year: "2008",
    album: "I AM... SASHA FIERCE",
    cover: "images/sasha_fierce.jpg",
    address: "23 W 32nd St",
    time: "10:14 PM",  
    x: 30,
    y: 37.5,
    point: "o",
    wherefrom: "Passing a karaoke floor walking down the stairs",
    audio: "audio/halo.mp3"
},
{
    title: "Gasolina",
    artist: "Daddy Yankee",
    year: "2004",
    album: "Barrio Fino",
    cover: "images/barrio_fino.jpg",
    address: "141 W 33rd St",
    time: "10:55 PM",  
    x: 25,
    y: 33,
    point: "o",
    wherefrom: "Pedicab",
    audio: "audio/gasolina.mp3"
},
{
    title: "Evil Twins",
    artist: "King Von, Lil Durk",
    year: "2022",
    album: "What It Means To Be King",
    cover: "images/evil_twins.jpg",
    address: "427-435 W 42nd St",
    time: "3:13 PM",
    x: 18,
    y: 10.8,
    point: "o",  
    wherefrom: "Passing car",
    audio: "audio/eviltwins.mp3"
},
{
    title: "Please Don't Go",
    artist: "K.W.S.",
    year: "2015",
    album: "Please Don't Go",
    cover: "images/please_dont_go.jpg",
    address: "450 W 46th St",
    time: "3:37 PM",  
    x: 18.5,
    y: 4.8,
    point: "o", 
    wherefrom: "Passing truck",
    audio: "audio/kws.mp3"
},
{
    title: "How Do U Want It (ft. K-Ci & JoJo)",
    artist: "2Pac, K-Ci & JoJo",
    year: "1996",
    album: "All Eyez On Me",
    cover: "images/all_eyez_on_me.jpg",
    address: "533-597 W 46th St",
    time: "3:34 PM",  
    x: 15,
    y: 2,
    point: "o", 
    wherefrom: "People siting outside with a speaker",
    audio: "audio/howdouwantit.mp3"
},
{
    title: "Ima Boss (feat. Rick Ross)",
    artist: "Meek Mill, Rick Ross",
    year: "2011",
    album: "MMG Presents: Self Made, Vol. 1",
    cover: "images/ima_boss.jpg",
    address: "400 W 46th St",
    time: "3:40 PM", 
    x: 21,
    y: 5.2,
    point: "o",  
    wherefrom: "Car at red light",
    audio: "audio/imaboss.mp3"
},
{
    title: "Una Nueva Noche Fria",
    artist: "Callejeros",
    year: "2004",
    album: "Presion",
    cover: "images/presion.jpg",
    address: "374 W 46th St",
    time: "3:40 PM", 
    x: 22.5,
    y: 6,
    point: "o",  
    wherefrom: "Walking by a restaurant",
    audio: "audio/callejeros.mp3"
},
{
    title: "Flinch Awake",
    artist: "Provoker",
    year: "2018",
    album: "Dark Angel",
    cover: "images/dark_angel.jpg",
    address: "Bushwick Inlet Park, 84 Kent Ave",
    time: "4:49 PM",
    x: 67,
    y: 92,
    point: "o",  
    wherefrom: "Speaker on parked bike",
    audio: "audio/flinchawake.mp3"
},
{
    title: "Bad News",
    artist: "Melody Gardot",
    year: "2015",
    album: "Currency Of Man",
    cover: "images/currency_of_man.jpg",
    address: "495 6th Ave",
    time: "12:01 PM",  
    x: 21.3,
    y: 73.7,
    point: "o",
    wherefrom: "Cafe playlist",
    audio: "audio/badnews.mp3"
},
];

window.addEventListener("load", () => {
  init();
});

const init = function () {
  const songBook = document.getElementById("songbook");


  song.map(function (song, i) {
    const songItem = buildSongItem(song, i);
    songBook.innerHTML = songBook.innerHTML + songItem;
  });

    let songDivs = [...document.getElementsByClassName("song-item")];

  songDivs.map((songDiv, i) => {
    songDiv.addEventListener(
      "click",

      () => {
        activatePopUp(song[i]);
      }
    );
  });
};
const audio = Array.from(document.querySelectorAll('audio'));

audio.forEach(function(audio) {
    audio.addEventListener('play', (event) => {
      audio.forEach(function(audio) {
        if(audio !== event.target) audio.pause();
      })
    })
})

const buildSongItem =function (song, i){
    return `
        <div class="song-item" style="left: ${song.x}%; top: ${song
        .y}%" id=${i}>
            <h4>${song.point}</h4>
            <audio controls autoplay>
                <source src=${song.audio} type="audio/mpeg">
            </audio>
            <div class="song-info">
                <img src=${song.cover}>
                <div class="text-info">
                    <h1>${song.title}</h1>
                    <h2>${song.artist}</h2>
                    <h3>${song.album}<br>${song.year}</h3>
                    <ul>
                        <li>${song.address}</li>
                        <li>${song.time}</li>
                        <li>${song.wherefrom}</li>
                    <ul>
                </div>
            </div>
        </div>`;
}