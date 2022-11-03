const weatherDashboardElement = document.querySelector("#weather-dashboard")



function getApi(requestUrl) {
  fetch(weatherBoardUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    //   weatherDashboardElement.textContent = data.city.sunrise
    });
}

getApi(weatherBoardUrl)

function getGeocodingUrl(geocodingUrl) {
    fetch(geocodingUrl)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        weatherDashboardElement.textContent = data[0].lat
      });
  }
  
  getGeocodingUrl(geocodingUrl)


// let geocodingUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" //input.value "appid=d55f24fccb2e40d4eec3016c984da28e";

// let weatherBoardUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=d55f24fccb2e40d4eec3016c984da28e';