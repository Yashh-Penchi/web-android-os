const dummyVideos = [
  {
    title: "🔴 Live Coding in JS",
    channel: "Yashh Dev",
    viewers: "5.4K watching",
    thumbnail: "https://img.youtube.com/vi/3EMxBkqC4z0/hqdefault.jpg",
  },
  {
    title: "ReactJS Crash Course",
    channel: "CodeWithYashh",
    viewers: "3.1K watching",
    thumbnail: "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg",
  },
  {
    title: "Tailwind UI Build 🔥",
    channel: "UI Master",
    viewers: "2.7K watching",
    thumbnail: "https://img.youtube.com/vi/6zIuAyLZPH0/hqdefault.jpg",
  },
  {
    title: "Node.js Live API",
    channel: "BackendKing",
    viewers: "4.2K watching",
    thumbnail: "https://img.youtube.com/vi/2n3Z9KMC4Uo/hqdefault.jpg",
  },
  {
    title: "Top 5 VS Code Tips",
    channel: "Dev Tools",
    viewers: "1.9K watching",
    thumbnail: "https://img.youtube.com/vi/VbXNmIvjwxY/hqdefault.jpg",
  },
  {
    title: "Docker in 15 mins 🐳",
    channel: "Cloud Dev",
    viewers: "2.5K watching",
    thumbnail: "https://img.youtube.com/vi/3c-iBn73dDE/hqdefault.jpg",
  },
  {
    title: "MongoDB Setup Guide",
    channel: "DB Ninja",
    viewers: "980 watching",
    thumbnail: "https://img.youtube.com/vi/-56x56UppqQ/hqdefault.jpg",
  },
  {
    title: "Python for Beginners 🐍",
    channel: "LearnFast",
    viewers: "6.1K watching",
    thumbnail: "https://img.youtube.com/vi/_uQrJ0TkZlc/hqdefault.jpg",
  },
  {
    title: "HTML & CSS Mastery",
    channel: "FrontEnd Pro",
    viewers: "3.8K watching",
    thumbnail: "https://img.youtube.com/vi/mU6anWqZJcc/hqdefault.jpg",
  },
];

const feed = document.querySelector(".ytFeed");

dummyVideos.forEach((video) => {
  feed.innerHTML += `
    <div class="ytVideoCard">
      <img class="ytThumbnail" src="${video.thumbnail}" alt="${video.title}" />
      <div class="ytVideoInfo">
        <div class="ytTitle">${video.title}</div>
        <div class="ytMeta">${video.channel} • ${video.viewers}</div>
      </div>
    </div>
  `;
});
