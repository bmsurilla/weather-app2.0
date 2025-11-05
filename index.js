// when enter city --> change city name
function changeCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#city-input");
  let updateCity = newCity.value;
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = updateCity;
}

let searchCity = document.querySelector("#search-bar");
searchCity.addEventListener("submit", changeCity);

// format date

//add api (temp, high, low, humidity, wind, feels like, city, description)
