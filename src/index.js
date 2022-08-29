const apiKey = "1a113ff0323f06b582adfa8290155b6a";

let currentDate = document.querySelector("#current-day");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let date = new Date();

let currentDay = days[date.getDay()];
let currentHour = date.getHours();
let currentMinutes = date.getMinutes(); 

currentDate.textContent = `${currentDay} ${currentHour}:${currentMinutes}`;




function showCity(event){

  event.preventDefault();
  
  let cityInput = document.querySelector("#city-input");
  let city = document.querySelector("#city");
  let town = cityInput.value;
  city.textContent = town;

  function showWeather(response){

    

    let celc = document.querySelector("#ceilcium");
    let farenh = document.querySelector("#farenh");
    let temperature = document.querySelector("#temperature");
    temperature.textContent = Math.round(response.data.main.temp);
   

    function showTempC(event) {
      event.preventDefault();
      temperature.textContent = Math.round(response.data.main.temp);
    }

    function showTempF(event) {
      event.preventDefault();
      temperature.textContent = Math.round(response.data.main.temp * 1.8 + 32);
    }

    celc.addEventListener("click", showTempC);
    farenh.addEventListener("click", showTempF);
  }

  const searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${apiKey}&units=metric`;
  axios.get(searchUrl).then(showWeather);

}


let searchCity = document.querySelector("#searchCity");
searchCity.addEventListener("click", showCity);


function showCurrentCity(){

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;


 function showCurrentWeather(response){

let city = document.querySelector("#city");
city.textContent = response.data.name;

let celc = document.querySelector("#ceilcium");
    let farenh = document.querySelector("#farenh");
    let temperature = document.querySelector("#temperature");
    temperature.textContent = Math.round(response.data.main.temp);


    function showTempC(event) {
      event.preventDefault();
      temperature.textContent = Math.round(response.data.main.temp);
    }

    function showTempF(event) {
      event.preventDefault();
      temperature.textContent = Math.round(response.data.main.temp * 1.8 + 32);
    }

    celc.addEventListener("click", showTempC);
    farenh.addEventListener("click", showTempF);
  }
 
  
  const searchUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(searchUrl).then(showCurrentWeather);
}
navigator.geolocation.getCurrentPosition(showPosition);
}

let currentCity = document.querySelector("#currentCity");
currentCity.addEventListener("click", showCurrentCity);


 

