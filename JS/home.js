const sweepArea = document.getElementById("HomePage");
const sweepArea1 = document.getElementById("HomePage1");

let startX = 0;
let endX = 0;

// Show Home Page 1
function HomePage1Show() {
  gsap.to("#HomePage1", {
    opacity: 1,
    duration: 0.3,
    left: "0%",
  });
}

// Hide Home Page 1
function HomePage1Hide() {
  gsap.to("#HomePage1", {
    opacity: 0,
    duration: 0.3,
    left: "100%",
  });
}

// --------------------
// For HomePage swipe left => Show HomePage1
// --------------------

// Touch Events
sweepArea.addEventListener("touchstart", (dtls) => {
  startX = dtls.touches[0].clientX;
});

sweepArea.addEventListener("touchend", (dtls) => {
  endX = dtls.changedTouches[0].clientX;
  let diffX = endX - startX;

  if (diffX < -50) { // Swipe left
    HomePage1Show();
  }
});

// Mouse Events
sweepArea.addEventListener("mousedown", (e) => {
  startX = e.clientX;
});

sweepArea.addEventListener("mouseup", (e) => {
  endX = e.clientX;
  let diffXX = endX - startX;

  if (diffXX < -50) { // Drag left
    HomePage1Show();
  }
});


// --------------------
// For HomePage1 swipe right => Hide HomePage1
// --------------------

// Touch Events
sweepArea1.addEventListener("touchstart", (dtls) => {
  startX = dtls.touches[0].clientX;
});

sweepArea1.addEventListener("touchend", (dtls) => {
  endX = dtls.changedTouches[0].clientX;
  let diffX = endX - startX;

  if (diffX > 50) { // Swipe right
    HomePage1Hide();
  }
});

// Mouse Events
sweepArea1.addEventListener("mousedown", (e) => {
  startX = e.clientX;
});

sweepArea1.addEventListener("mouseup", (e) => {
  endX = e.clientX;
  let diffXX = endX - startX;

  if (diffXX > 50) { // Drag right
    HomePage1Hide();
  }
});


let bottomAppSearch = document.getElementById('bottomAppSearch');

bottomAppSearch.addEventListener("click", () => {
      HomePage1Hide();
})

