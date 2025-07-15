let songsArea = document.querySelector("#musicStripsArea");
let elemStorer = ""

const musicData = [
  {
    img: "./Img/Iktara - Male Version.jpg",
    title: "Iktara ‑ Male Version",
    artist: "Amit Trivedi, Tochi Raina, Amitabh Bhattachan",
    song: "./Music/Iktara - Male Version.mp3"
  },
  {
    img: "./Img/Channa Mereya.jpg",
    title: "Channa Mereya",
    artist: "Arijit Singh",
    song: "./Music/Channa Mereya.mp3"
  },
  {
    img: "./Img/Raanjhan-From-Do-Patti.jpg",
    title: "Raanjhan (From 'Do Patti')",
    artist: "Parampara Thakur, Shreya Ghoshal, Vishal Mishra",
    song: "./Music/Raanjhan (From 'Do Patti').mp3"
  },
  {
    img: "./Img/Teri Ore.jpg",
    title: "Teri Ore",
    artist: "Pritam, Rahat Fateh Ali Khan, Shreya Ghoshal, Mayur Puri",
    song: "./Music/Teri Ore.mp3"
  },
  {
    img: "https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg",
    title: "Kesariya",
    artist: "Arijit Singh, Pritam",
    song: "./Music/Kesariya.mp3"
  },
  {
    img: "https://a10.gaanacdn.com/gn_img/albums/a7LWBzWzXA/LWBkVVA4bz/size_m_1686735322.jpg",
    title: "Apna Bana Le",
    artist: "Arijit Singh, Sachin–Jigar",
    song: "./Music/Apna Bana Le.mp3"
  },
  {
    img: "https://i.scdn.co/image/ab67616d0000b273ff7a84a9e320e8e2b1898a4c",
    title: "Tujh Mein Rab Dikhta Hai",
    artist: "Roop Kumar Rathod",
    song: "./Music/Tujh Mein Rab Dikhta Hai.mp3"
  },
  {
    img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tum-mile-et00003496-24-03-2017-17-03-37.jpg",
    title: "Tum Mile (Love Reprise)",
    artist: "Jubin Nautiyal",
    song: "./Music/Tum Mile (Love Reprise).mp3"
  },
];



musicData.forEach((song) => {
  elemStorer += `
  <div id="musicListStrip">
    <div id="img"><img src="${song.img}"></div>
    <div id="dtls">
      <h4>${song.title}</h4>
      <h5>${song.artist}</h5>
    </div>
    <div class="icons" id="iconPC"><i class="ri-more-2-fill"></i></div>
  </div>
  `;
});

songsArea.innerHTML = elemStorer;


const playPauseBtn = document.querySelector("#musicStrip #iconPlay");
const playPauseIcon = playPauseBtn.querySelector("i");


// playPauseIcon.addEventListener("click", () => {
//   if (playPauseIcon.classList.contains("ri-play-large-fill")) {
//     playPauseIcon.classList.remove("ri-play-large-fill");
//     playPauseIcon.classList.add("ri-pause-large-line");
//   } else {
//     playPauseIcon.classList.remove("ri-pause-large-line");
//     playPauseIcon.classList.add("ri-play-large-fill");
//   }
// });


// or


playPauseBtn.addEventListener("click", () => {
  const isPlaying = playPauseIcon.classList.contains("ri-play-large-fill");

  playPauseIcon.classList.remove(
    isPlaying ? "ri-play-large-fill" : "ri-pause-large-line"
  );
  playPauseIcon.classList.add(
    isPlaying ? "ri-pause-large-line" : "ri-play-large-fill"
  );
});
