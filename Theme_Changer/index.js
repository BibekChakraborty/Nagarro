const blk = document.getElementById("color1");
const blu = document.getElementById("color2");
const grn = document.getElementById("color3");
const yel = document.getElementById("color4");
const text = document.getElementById("input");
const bod = document.getElementById("bod");

blk.addEventListener("click", () => {
  text.classList.remove("blue");
  text.classList.remove("green");
  text.classList.remove("yellow");
  text.classList.add("black");
  document.body.style.backgroundColor = "black";
});
blu.addEventListener("click", () => {
  text.classList.remove("black");
  text.classList.remove("green");
  text.classList.remove("yellow");
  text.classList.add("blue");
  document.body.style.backgroundColor = "rgb(6, 6, 114)";
});
grn.addEventListener("click", () => {
  text.classList.remove("blue");
  text.classList.remove("black");
  text.classList.remove("yellow");
  text.classList.add("green");
  document.body.style.backgroundColor = "green";
});
yel.addEventListener("click", () => {
  text.classList.remove("blue");
  text.classList.remove("green");
  text.classList.remove("black");
  text.classList.add("yellow");
  document.body.style.backgroundColor = "yellow";
});
