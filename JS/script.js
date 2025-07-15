document.addEventListener("DOMContentLoaded", function () {
  //Current Time ------------------------------------------------------

  function notchTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const timeString = `${hours}:${minutes}`;
    document.getElementById("currentTime").textContent = timeString;
  }

  setInterval(notchTime, 1000);
  notchTime();
});


navigator.getBattery().then(function (battery) {
  // Battery API function

  function updateBatteryLevel() {
    let level = Math.floor(battery.level * 100);
    document.getElementById("batteryPrcntz").innerHTML = level + "%";

    if (level < 30) {
      document.getElementById("batteryIcon").innerHTML = "🪫";
    } else {
      document.getElementById("batteryIcon").innerHTML = "🔋";
    }
  }

  updateBatteryLevel();
  document.addEventListener("levelchange", updateBatteryLevel);
});

// Online/ Offline Status  -------------------------------------------------
// API

function updateWifiStatus() {
  let wifi = document.getElementById("wifi");

  if (navigator.onLine) {
    wifi.style.display = "inline";
  } else {
    wifi.style.display = "none";
  }
}

updateWifiStatus();
window.addEventListener("online", updateWifiStatus);
window.addEventListener("offline", updateWifiStatus);

// ?? bar 

let svgArea = document.querySelector("#barr");
let isDragging = false;

let path = `M 10 20 Q 65 20 100 20`;
let finalPath = `M 10 20 Q 65 20 100 20`;

// Mouse down: Start dragging
svgArea.addEventListener("mousedown", (e) => {
  isDragging = true;
});

// Mouse move: If dragging, update curve
svgArea.addEventListener("mousemove", (e) => {
  if (isDragging) {
    let y = e.offsetY;
    path = `M 10 20 Q 65 ${y} 100 20`;
    gsap.to("#barr path", {
      attr: { d: path },
      duration: 0.2,
    });
  }
});

// Mouse up: Stop dragging, return to original
document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    gsap.to("#barr path", {
      attr: { d: finalPath },
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });
  }
});


let GoogleSearch = document.querySelector("#googleSearchDiv");
let googlePageBack = document.querySelector("#googlePageShow #googleSearchDiv1 #backGo");
let GoogleSearchBtn= document.querySelector("#searchBtn");



GoogleSearch.addEventListener("click", () => {
  document.getElementById("googlePageShow").style.opacity = "1";
  document.getElementById("googlePageShow").style.pointerEvents = "auto";
  document.getElementById("googlePageShow").style.display = "block";
});

googlePageBack.addEventListener("click", () => {
  document.getElementById("googlePageShow").style.opacity = "0";
  document.getElementById("googlePageShow").style.pointerEvents = "none";
  document.getElementById("googlePageShow").style.display = "none";

});

GoogleSearchBtn.addEventListener("click", () => {
  document.getElementById("showRecent").style.opacity = "0";
  document.getElementById("showRecent").style.pointerEvents = "none";
  document.getElementById("searchBox").style.opacity = "1";
  document.getElementById("searchBox").style.pointerEvents = "auto";
});

document.querySelector("#barr").addEventListener("click", () => {
    document.querySelector("#googlePageShow").style.opacity = "0";
    document.querySelector("#googlePageShow").style.pointerEvents = "none";
});



//               camara --------------

  let camaraDgn = document.getElementById("#camra");
  const video = document.getElementById('cameraDisplayShow');


    navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
      gsap.to(camaraDgn, {
        opacity: 0.3,
        duration: 0.3,
      });
    })
    .catch((err) => {
      console.error("Camera access error:", err);
      console.error("Camera access failed. Check permissions  run on localhost.");
    });
    

      // filters --------

let filterButton = document.getElementById("tool4-Filter");  
let gyroFilterButton = document.getElementById("tool3-Colour");
let hdrFilterButton = document.getElementById("tool2-HDR");

hdrFilterButton.addEventListener("click", () => {
  if (video.style.filter && video.style.filter !== "none") {
    video.style.filter = "none";
    hdrFilterButton.innerHTML = "<i class='ri-hd-line'></i>"; 
  } else {
    video.style.filter = "brightness(1.15) contrast(1.4) saturate(1.4) drop-shadow(0 0 0.15rem rgba(0,0,0,0.15))";
    hdrFilterButton.innerHTML = "<i class='ri-hd-fill'></i>"; 
  }
});


filterButton.addEventListener("click", () => {
  if (video.style.filter && video.style.filter !== "none") {
    video.style.filter = "none";
    filterButton.innerHTML = '<i class="ri-color-filter-ai-line"></i>'; 
  } else {
    video.style.filter = "brightness(1.2) contrast(1.5) saturate(1.3) sepia(0.2)";
    filterButton.innerHTML = '<i class="ri-color-filter-ai-fill"></i>';
  }
});

gyroFilterButton.addEventListener("click", () => {
  if (video.style.filter && video.style.filter !== "none") {
    video.style.filter = "none";
    gyroFilterButton.innerHTML = '<i class="ri-pantone-line"></i>';
  } else {
    video.style.filter = "grayscale(1) contrast(1.8) brightness(1.1)";
    gyroFilterButton.innerHTML = '<i class="ri-pantone-fill"></i>';
  }
});


// flash 

let trigger = document.getElementById("camaraTrigger");
let flashOverlay = document.getElementById("flashOverlay");

trigger.addEventListener("click", () => {
  gsap.fromTo(flashOverlay, 
    { opacity: 0 },
    { opacity: 1, duration: 0.1, yoyo: true, repeat: 1, ease: "power1.inOut" }
  );

});

let flashBtn = document.getElementById("tool1-Flash");
let camraTopDgn = document.getElementById("camra");

let isLight = false;
flashBtn.addEventListener("click", () => {
  if (!isLight) {
    isLight = true;

    camraTopDgn.style.opacity = "0.5";
    camraTopDgn.style.boxShadow = "0px 0px 7.5px 10px #ffffffb4";

  } else {
      camraTopDgn.style.opacity = "0.25";
    camraTopDgn.style.boxShadow = "0px 0px 5px 10px #ffffff62";
    isLight = false;
  }
});

// zoom functionality

const zoomBtns = [
  document.querySelector("#zoomLevels #level1"),
  document.querySelector("#zoomLevels #level2"),
  document.querySelector("#zoomLevels #level3")
];
const zoomScales = [1, 1.3, 1.5];

// applyZoom function

function applyZoom(index) {
  video.style.scale = zoomScales[index];
  video.style.transition = "scale 0.3s ease";

  zoomBtns.forEach((btn, i) => {
    if (i === index) {
      btn.innerHTML = `${i + 1}x`;
      btn.style.padding = "1vh 1.5vh";
      btn.style.backgroundColor = "rgba(0, 0, 0, 0.222)";
      btn.style.border = "2px solid rgba(255, 255, 255, 0.454)";
      btn.style.backdropFilter = "blur(10px)";
    } else {
      btn.innerHTML = "•";
      btn.style.padding = "0";
      btn.style.backgroundColor = "transparent";
      btn.style.border = "none";
      btn.style.backdropFilter = "blur(0px)";
    }
  });
}

// Event listeners

zoomBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => applyZoom(index));
});



// for camara App open close

const camaraApp = document.getElementById("camaraApp");
const camaraIcon = document.querySelector("#AppCamara");
const homeBarr = document.querySelector("#barr");

camaraIcon.addEventListener("click", () => {
  camaraApp.style.zIndex = "9995";

  camraTopDgn.style.opacity = "0.25";
  camraTopDgn.style.boxShadow = "0px 0px 5px 10px #ffffff62";

  applyZoom(0); // reset to 1x
  video.style.transition = "scale 0.1s ease";
});

homeBarr.addEventListener("click", () => {
  camaraApp.style.zIndex = "100";

  camraTopDgn.style.opacity = "0.05";
  camraTopDgn.style.boxShadow = "0px 0px 20px 0px #00000062";
});



// for contact app open close
let contactAppIcon = document.querySelector("#AppCall");

contactAppIcon.addEventListener("click", () => {
  document.getElementById("forCallApp").style.zIndex = "9995";
});
homeBarr.addEventListener("click", () => {
  document.getElementById("forCallApp").style.zIndex = "150";
});


// for calculatorApp app open close
let calculatorAppIcon = document.querySelector(".AppCalculator");

calculatorAppIcon.addEventListener("click", () => {
  document.getElementById("calculatorApp").style.zIndex = "9995";
});
homeBarr.addEventListener("click", () => {
  document.getElementById("calculatorApp").style.zIndex = "200";
});


// for notes app open close
let notesAppIcon = document.querySelector("#noteBar #icon1");

notesAppIcon.addEventListener("click", () => {
  document.getElementById("notesApp").style.zIndex = "9995";
});
homeBarr.addEventListener("click", () => {
  document.getElementById("notesApp").style.zIndex = "250";
} );


// for settingApp app open close
let settingAppIcon = document.querySelector(".AppSettings");

settingAppIcon.addEventListener("click", () => {
  document.getElementById("settingsApp").style.zIndex = "9995";
});
homeBarr.addEventListener("click", () => {
  document.getElementById("settingsApp").style.zIndex = "400";
});


// for googleMap app open close
let googleMapAppIcon = document.querySelector(".AppGoogleMap");

googleMapAppIcon.addEventListener("click", () => {
  document.getElementById("mapApp").style.zIndex = "9995";
});
homeBarr.addEventListener("click", () => {
  document.getElementById("mapApp").style.zIndex = "450";
});


// for youtube app open close
let youtubeAppIcon = document.querySelector(".AppYoutube");

youtubeAppIcon.addEventListener("click", () => {
  document.getElementById("youtubeApp").style.zIndex = "9995";
});
homeBarr.addEventListener("click", () => {
  document.getElementById("youtubeApp").style.zIndex = "300";
});


// for games app open close
let gamesAppIcon = document.querySelector(".AppGames");

gamesAppIcon.addEventListener("click", () => {
  document.getElementById("gamesApp").style.zIndex = "9995";
});
homeBarr.addEventListener("click", () => {
  document.getElementById("gamesApp").style.zIndex = "500";
});


// for games app open close
let todoApp = document.querySelector(".todoApp");

todoApp.addEventListener("click", () => {
  document.getElementById("todoApp").style.zIndex = "9995";
});
homeBarr.addEventListener("click", () => {
  document.getElementById("todoApp").style.zIndex = "650";
});


// for instagram app open close
let instagram = document.querySelector(".instagram");

instagram.addEventListener("click", () => {
  document.getElementById("instagramApp").style.zIndex = "9995";
});
homeBarr.addEventListener("click", () => {
  document.getElementById("instagramApp").style.zIndex = "650";
});



// for whatsapp app open close
let whatsapp = document.querySelector(".whatsappHomeApp");

whatsapp.addEventListener("click", () => {
  document.getElementById("whatsappHomeApp").style.zIndex = "9995";
});
homeBarr.addEventListener("click", () => {
  document.getElementById("whatsappHomeApp").style.zIndex = "700";
});



// for spotifyApp open close

let spotifyApp = document.querySelector(".spotifyApp");
let spotifyApp1 = document.querySelector(".spotifyApp1");

spotifyApp.addEventListener("click", () => {
  document.getElementById("spotifyApp").style.zIndex = "9995";
});
spotifyApp1.addEventListener("click", () => {
  document.getElementById("spotifyApp").style.zIndex = "9995";
});
homeBarr.addEventListener("click", () => {
  document.getElementById("spotifyApp").style.zIndex = "850";
});





