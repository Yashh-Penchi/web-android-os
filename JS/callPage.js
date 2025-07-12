let callButton = document.querySelector("#Calls");

const tl = gsap.timeline({ paused: true, reversed: true });  //timeline paused rahegi and also reversed

let callBar = document.getElementById("callBar");
callBar.addEventListener("click", () =>{
  gsap.to("#callBarScreen", {
    opacity: 1,
    bottom: "49%",
  })
})

tl.from("#callBarScreen", {
  bottom: "-50%",
  opacity: 0,
  duration: 0.3,
});
tl.from("#callBar", {
  bottom: "-50%",
  opacity: 0.0,
  duration: 0.3,
});

callButton.addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();   // yadi timeline reversed hai to play hogi nahi to reverse hogi !!
});


let callsBarHide1 = document.querySelector("#Contacts");
let callsBarHide2 = document.querySelector("#content");
let callsBarHide3 = document.getElementById("⁛");
let searchButton = document.getElementById("searchh");


callsBarHide1.addEventListener("click", () =>{
  tl.reverse();
})
callsBarHide2.addEventListener("click", () =>{
  tl.reverse();
})
callsBarHide3.addEventListener("click", () =>{
  tl.reverse();
})
searchButton.addEventListener("click", () =>{
  tl.play();
})

let callBarScreen = document.querySelector("#callBarScreen");
callBar.addEventListener("click", (dets) => {

  let checkTap = dets.target.innerText;
  if (/^[0-9*#]$/.test(checkTap)) {     // inke alawa kuch show nahi hoga
    callBarScreen.textContent += checkTap;

  }
});

// backspace hndle
let backspace = document.getElementById("←")
backspace.addEventListener("click", () => {
  callBarScreen.textContent = callBarScreen.textContent.slice(0, -1);
});



// --------------------------------  call  --------------------------------------------------
function call() {
  if (callBarScreen.textContent.length === 0) {
    alert("Please enter a number to call.");
    return;
  }

  // yeh call karega jo number diya hai 
  window.location.href = "tel:" + callBarScreen.textContent  //trim() for remove extra spaces  
}

document.addEventListener('DOMContentLoaded', () => {
  const callBtn = document.querySelector('#‿');  
  if (callBtn) {
    callBtn.addEventListener('click', call);
  }
});


// AddContact btn 

let addContactBtn = document.getElementById("addContect");
let addContactClose = document.getElementById("addContactClose");
let addContactPage = document.getElementById("addContactPage");
let addContactClose1 = document.querySelector("#topHeader #header1");
let addContactDone = document.querySelector("#topHeader #header3");

addContactBtn.addEventListener("click", () => {
  addContactPage.style.display = "block";
  addContactPage.style.opacity = "1";
  addContactPage.style.pointerEvents = "auto";
});

function addContactCloseStyles() {
    addContactPage.style.opacity = "0";
  addContactPage.style.pointerEvents = "none";
  addContactPage.style.display = "none";
}

addContactClose.addEventListener("click", () => {
  addContactCloseStyles();
});
addContactDone.addEventListener("click", () => {
    addContactCloseStyles();
});
addContactClose1.addEventListener("click", () => {
    addContactCloseStyles();
});