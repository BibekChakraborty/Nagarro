const gets = document.getElementById("get");
const container = document.getElementById("container");

const key = `165fc335-8fff-4e09-abf1-5994899c73a8`;
const url = `https://api.cricapi.com/v1/cricScore?apikey=${key}`;

const xhr = new XMLHttpRequest();
gets.addEventListener('click',()=>{
  container.classList.remove('hide');
  gets.classList.add('hide');
})
xhr.open("get", url);
xhr.onload = () => {
  if (xhr.status === 200) {
    let { data: matches } = JSON.parse(xhr.responseText);

    for (i = 0; i < matches.length; i++) {
      let match = matches[i];

      if ((match.t1s != "" || match.t2s != "")) {
        if (match.t1s == "") {
          match.t1s = "----";
        } else if (match.t2s == "") {
          match.t2s = "----";
        }
        tiles.innerHTML += `<div>
       <div> <h2 class="status">${matches[i].status}</h2> </div>
       <div class="icons"> <img class="iconim" src=${matches[i].t1img} > <h2 class="versus">vs<h2> <img src=${matches[i].t2img} > </div> 
       <div class="headings"><h4>${matches[i].t1}</h4> <h4>${matches[i].t2}</h4></div>
       <div class="score"> <p>${matches[i].t1s}</p>  <p>${matches[i].t2s}</p> </div> 
       </div>`;
      }
    }
  }
};
xhr.send();


