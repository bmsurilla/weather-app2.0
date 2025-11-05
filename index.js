function changeCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#city-input");
  let updateCity = newCity.value;
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = updateCity;
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
// format date

//add api (temp, high, low, humidity, wind, feels like, city, description)
