const key = "a0d68575a9ceef83131d7b76b87e7e14";
let searchbtn = document.getElementById("search");
searchbtn.addEventListener("click", () => {
  let city = document.getElementById("input").value;
  if(city.length==0)
    alert("City should have a name.");
  else
    search(city);
});

const search = (city) => {
  
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
  )
    .then((response) => response.json())
    .then((data) => {
      showWeather(data);
      console.log(data);
    });
};

function showWeather(data) {
  if (data.cod == "404") {
    document.getElementById("result").innerHTML =
      '<div class="text-white text-2xl m-auto p-8">City not found, re-enter.</div>';
  } else {
    console.log(data.weather[0].icon);
    document.getElementById(
      "result"
    ).innerHTML = `<div class="text-white text-4xl font-semibold p-2 m-1" >${data.main.temp} &#8451;</div>
    <h1 class="text-white text-3xl font-semibold p-2 m-1">${data.weather[0].main}</h1>
    <div class="text-xl p-2 m-1 font-normal text-white"> ( ${data.weather[0].description} )</div>
    <div class="text-xl font-semibold p-2 m-1 text-white">Humidity: ${data.main.humidity}</div>`;
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    search(document.getElementById("input").value);
  }
});

// <img src="https://openweathermap.org/img/wn/"+data.weather[0].icon+".png">
