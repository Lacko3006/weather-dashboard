const weatherDashboardElement = document.querySelector("#weather-dashboard");
const inputValue = document.querySelector("#data-input");
const searchButton = document.querySelector("#search-btn");
let saveSearchElement = document.querySelector(".saved-search");
const dataCardsElement = document.querySelectorAll(".card");
const cityNameElement = document.querySelectorAll(".name");
const windElement = document.querySelectorAll(".wind");
const temperatureElement = document.querySelectorAll(".temperature")
const humidityElement = document.querySelectorAll(".humidity")
const timeElement = document.querySelectorAll(".time");
const iconElement = document.querySelectorAll(".icon");

searchButton.addEventListener("click", weatherSearch);

let searchHistory = [];

function weatherSearch() {
  let weatherBoardUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    inputValue.value +
    "&appid=d55f24fccb2e40d4eec3016c984da28e";
  function getApi(requestUrl) {
    fetch(weatherBoardUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let j = 0;
        let dataStored = data.list;
        cityNameElement[j].textContent = data.city.name;
        for (i = 0; i < dataStored.length; i = i + 8) {
          windElement[j].textContent = "Wind speed: " + data.list[i].wind.speed;
          timeElement[j].textContent = "Current date: "+ data.list[i].dt_txt;
          temperatureElement[j].textContent = "Temperature: " + Math.round(data.list[i].main.temp - 273.15)+" C"
          humidityElement[j].textContent = "Humidity: " + data.list[i].main.humidity;
          iconElement[j].src="http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+".png"
          j = j + 1;
        }
        savedSearch = inputValue.value
        searchHistory = searchHistory.concat(savedSearch)
        console.log(searchHistory)
        saveSearchElement.textContent = searchHistory
        // turn array into list and links

  })

  }
  getApi(weatherBoardUrl);
}
