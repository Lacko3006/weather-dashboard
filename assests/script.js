const weatherDashboardElement = document.querySelector("#weather-dashboard");
const inputValue = document.querySelector("#data-input");
const searchButton = document.querySelector("#search-btn");
let saveSearchElement = document.querySelector("#saved-search");
const dataCardsElement = document.querySelectorAll(".card");
const cityNameElement = document.querySelectorAll(".name");
const windElement = document.querySelectorAll(".wind");
const temperatureElement = document.querySelectorAll(".temperature");
const humidityElement = document.querySelectorAll(".humidity");
const timeElement = document.querySelectorAll(".time");
const iconElement = document.querySelectorAll(".icon");
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

// searchButton.addEventListener("click", weatherSearch);

function weatherSearch(searchValue) {
  let historySearch = searchValue || inputValue.value 
  let weatherBoardUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q="+historySearch+"&appid=d55f24fccb2e40d4eec3016c984da28e";
    getApi(weatherBoardUrl)
}

function getApi(requestUrl) {
  fetch(requestUrl)
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
        timeElement[j].textContent = "Current date: " + data.list[i].dt_txt;
        temperatureElement[j].textContent =
          "Temperature: " +
          Math.round(data.list[i].main.temp - 273.15) +
          " C";
        humidityElement[j].textContent =
          "Humidity: " + data.list[i].main.humidity;
        iconElement[j].src =
          "http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
        j = j + 1;
      }
    });
}

searchButton.addEventListener("click", function () {
  const searchTerm = inputValue.value;
  weatherSearch(searchTerm);
  searchHistory.push(searchTerm);
  localStorage.setItem("search", JSON.stringify(searchHistory));
  renderSearchHistory();
  searchHistoryLengthControl()
});

function renderSearchHistory() {
  saveSearchElement.innerHTML = "";
  for (let i = 0; i < searchHistory.length; i++) {
    const historyItem = document.createElement("input");
    historyItem.setAttribute("type", "text");
    historyItem.setAttribute("readonly", true);
    // historyItem.setAttribute("value", searchHistory[i]);
    historyItem.value = searchHistory[i]
    historyItem.addEventListener("click", function () {
      weatherSearch(historyItem.value);
      console.log(historyItem.value);
    });
    saveSearchElement.append(historyItem);
  }
}

function searchHistoryLengthControl() {
if (searchHistory.length > 4) {
  localStorage.setItem("search", JSON.stringify(searchHistory));
  searchHistory.shift()
}}
