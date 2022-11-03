const weatherDashboardElement = document.querySelector("#weather-dashboard");
const inputValue = document.querySelector("#data-input");
let searchButton = document.querySelector("#search-btn");

searchButton.addEventListener("click", weatherSearch);

function weatherSearch(){
let weatherBoardUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+inputValue.value+"&appid=d55f24fccb2e40d4eec3016c984da28e";
function getApi(requestUrl) {
  fetch(weatherBoardUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.list[0].wind.speed);
    });
}

getApi(weatherBoardUrl);
}

