function displayTemp(response) {
  let tempValue = document.querySelector("#current-temp-value");
  let actualTemp = Math.round(response.data.temperature.current);
  tempValue.innerHTML = actualTemp;
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = response.data.city;

  let tempDescription = document.querySelector("#current-temp-condition");
  let actualDescription = response.data.condition.description;
  tempDescription.innerHTML = actualDescription;

  let tempIcon = document.querySelector("#current-temp-icon");
  let actualIcon = response.data.condition.icon_url;
  tempIcon.src = actualIcon;

  let extrasHumidity = document.querySelector("#extras-humidity");
  let actualHumidity = response.data.temperature.humidity;
  extrasHumidity.innerHTML = `${actualHumidity}%`;

  let extrasWind = document.querySelector("#extras-wind");
  let actualWind = (response.data.wind.speed * 3.6).toFixed(1);
  extrasWind.innerHTML = `${actualWind} km/h`;

  let extrasFeels = document.querySelector("#extras-feels");
  let actualFeels = Math.round(response.data.temperature.feels_like);
  extrasFeels.innerHTML = `${actualFeels}°C`;

  getForecast(response.data.city);
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

function getForecast(city) {
  let apiKey = "bab44a6ef3at298bof0b63093865ccef";
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);

  let forecastBlock = document.querySelector("#forecast");
  let forecastHtml = "";
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="forecast-element">
        <div class="forecast-day">${day}</div>
        <img class="forecast-icon" src="" alt="icon" />
        <div class="forecast-description">Sunny</div>
        <div class="forecast-temp">
          <div class="forecast-high">21°C </div>
          <div class="forecast-low">15°C</div>
        </div>
      </div>
        <br/>
        `;
  });
  forecastBlock.innerHTML = forecastHtml;
}

let searchCity = document.querySelector("#search-bar");
searchCity.addEventListener("submit", changeCity);
searchCity.addEventListener("submit", formatDate);
formatDate();
