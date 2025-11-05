function displayTemp(response) {
  let tempValue = document.querySelector("#current-temp-value");
  let actualTemp = Math.round(response.data.temperature.current);
  tempValue.innerHTML = actualTemp;
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = response.data.city;
}

function changeCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#city-input");
  let updateCity = newCity.value;

  let apiKey = "bab44a6ef3at298bof0b63093865ccef";
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${updateCity}&key=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayTemp);
}

function formatDate() {
  let today = new Date();
  let year = today.getFullYear();
  let date = today.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekday[today.getDay()];

  let shortMonth = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = shortMonth[today.getMonth()];

  let hours = today.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let datum = document.querySelector("#datum");
  datum.innerHTML = `${day}, ${month}. ${date} ${year}`;
  let time = document.querySelector("#time");
  time.innerHTML = `${hours}:${minutes}`;
}

let searchCity = document.querySelector("#search-bar");
searchCity.addEventListener("submit", changeCity);
searchCity.addEventListener("submit", formatDate);
formatDate();

//add api (temp, high, low, humidity, wind, feels like, city, description)
