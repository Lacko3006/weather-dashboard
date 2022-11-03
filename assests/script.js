const weatherDashboardElement = document.querySelector("#weather-dashboard");
const inputValue = document.querySelector("#data-input");
const searchButton = document.querySelector("#search-btn");
const dataCardsElement = document.querySelectorAll(".card")
const windElement = document.querySelectorAll(".wind")

searchButton.addEventListener("click", weatherSearch);

function weatherSearch(){
let weatherBoardUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+inputValue.value+"&appid=d55f24fccb2e40d4eec3016c984da28e";
//function getApi(requestUrl) {
  fetch(weatherBoardUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

    let dataStored = data.list
      let j=0
      for (i=0; i < dataStored.length; i=i+8){
 
      windElement[j].textContent = data.list[i].wind.speed
      console.log(data.list[i].wind.speed)
      j=j+1
}
}



);
}

  

//getApi(weatherBoardUrl);}

