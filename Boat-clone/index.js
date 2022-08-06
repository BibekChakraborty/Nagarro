//dropdown
let drops = document.getElementById("more");
let dropped = document.getElementById("dropped");
drops.addEventListener("mouseover", () => {
  dropped.classList.remove("hidden");
});

dropped.addEventListener("mouseleave", () => {
  dropped.classList.add("hidden");
});

//carousel
let index = 0;
let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", () => {
  currentslide(index + 1);
});
prev.addEventListener("click", () => {
  currentslide(index - 1);
});

function currentslide(n) {
  let slider = document.querySelectorAll(".slide");
  n = n >= slider.length ? 0 : n;
  n = n < 0 ? slider.length - 1 : n;
  slider[index].classList.add("inactive");
  slider[n].classList.remove("inactive");
  index = n;
}

setInterval(() => {
  currentslide(index + 1);
}, 3000);

//hovereffect
const img0 = document.getElementById("eph_0");
const img1 = document.getElementById("eph_1");
const img2 = document.getElementById("eph_2");
const img3 = document.getElementById("eph_3");

img0.addEventListener("mouseover", () => {
  img0.src = "./assets/ephho.png";
});
img0.addEventListener("mouseleave", () => {
  img0.src = "./assets/eph.png";
});

img1.addEventListener("mouseover", () => {
  img1.src = "./assets/eph1ho.png";
});

img1.addEventListener("mouseleave", () => {
  img1.src = "./assets/eph1.png";
});

img2.addEventListener("mouseover", () => {
  img2.src = "./assets/eph2ho.png";
});
img2.addEventListener("mouseleave", () => {
  img2.src = "./assets/eph2.png";
});

img3.addEventListener("mouseover", () => {
  img3.src = "./assets/eph3ho.png";
});
img3.addEventListener("mouseleave", () => {
  img3.src = "./assets/eph3.png";
});

//countdown
let deadline = new Date("Aug 25, 2022 18:30:00").getTime();
function updateCountdown() {
  let now = Date.now();
  var diff = deadline - now;
  let ms = (diff % 1000) % 10;
  let s = Math.floor((diff / 1000) % 60);
  let m = Math.floor((diff / 60000) % 60);
  let h = Math.floor((diff / 3600000) % 24);
  let d = Math.floor(diff / 86400000);

  if (diff < 0) {
    document.getElementById("countdown").innerHTML = `Expired, stay tuned.`;
    document.getElementById("countdown").style.color = "maroon";
  } else {
    document.getElementById(
      "countdown"
    ).innerHTML = `Ending in: ${d}d  ${h}h  ${m}m  ${s}s  <span class="inline-block w-[35px] bg-white p-1 text-sm font-semibold">${ms}</span>`;
  }
}
setInterval(updateCountdown, 1);

