const tabs = document.querySelectorAll('.waTab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    });
});

// Whatsapp Contact Data  

const waChatData = [
  {
    avatar: "👤",
    name: "Yashh Lodha <span style='color: rgba(197, 197, 197, 0.644)'>(self)</span>",
    time: "9:13 PM",
    message: "Saved a Document!"
  },
  {
    avatar: "🐱",
    name: "Aarav",
    time: "10:25 AM",
    message: "Bro send the link fast!"
  },
  {
    avatar: "🤓",
    name: "Pratham",
    time: "11:50 AM",
    message: "Assignment done 🚀"
  },
  {
    avatar: "👽",
    name: "Nikhil",
    time: "3:33 PM",
    message: "Arey party kab hai?"
  },
  {
    avatar: "👻",
    name: "Anjali",
    time: "7:02 PM",
    message: "That meme was epic 😂"
  },
  {
    avatar: "🐸",
    name: "Vikas",
    time: "8:10 PM",
    message: "Code pushed to Git ✅"
  },
  {
    avatar: "🐼",
    name: "Sneha",
    time: "6:47 PM",
    message: "??"
  },
  {
    avatar: "🦸",
    name: "Satvik",
    time: "2:33 PM",
    message: "Coming to college tomorrow?"
  },
  {
    avatar: "🧠",
    name: "Manasvi",
    time: "1:17 PM",
    message: "Notes bhej de pls"
  },
  {
    avatar: "🦉",
    name: "Kunal",
    time: "12:05 PM",
    message: "Class cancel ho gayi 😅"
  },
  {
    avatar: "🐧",
    name: "Rhea",
    time: "4:40 PM",
    message: "Tu khush hai na?"
  },
  {
    avatar: "🐒",
    name: "Aditya",
    time: "6:16 PM",
    message: "Room pe aa?"
  },
  {
    avatar: "🦄",
    name: "Ishika",
    time: "11:59 AM",
    message: "Uff that filter 🔥"
  },
];


let waChatList = document.querySelector('.waChatList');
let clutter2 = "";

waChatData.forEach(dataFill =>{
  clutter2 += `<li class="waChatItem">
      <div class="waAvatar">${dataFill.avatar}</div>
      <div class="waChatInfo">
        <div class="waChatTop">
          <span class="waName">${dataFill.name}</span>
          <span class="waTime">${dataFill.time}</span>
        </div>
        <div class="waMessage">${dataFill.message}</div>
      </div>
    </li>`
});

waChatList.innerHTML = clutter2;


