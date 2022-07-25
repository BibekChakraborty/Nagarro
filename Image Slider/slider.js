let total = 8;
var count = 0;
let prev = document.getElementById("prev");
prev.addEventListener("click", previous);

function previous(e) {
    document.getElementById(`${count}`).classList.add("in-active");
    count=((count+total)-1)%total;
    document.getElementById(`${count}`).classList.remove("in-active");
}

let next = document.getElementById("next");
next.addEventListener("click", nextt);
function nextt(e) {
  document.getElementById(`${count}`).classList.add("in-active");
  count=(count+1)%total;
  document.getElementById(`${count}`).classList.remove("in-active");
}

 window.onload=function(){
   document.getElementById("aud").play();
 } 