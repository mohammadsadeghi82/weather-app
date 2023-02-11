let prevPage = document.querySelector(".bi-arrow-left");
let mainWeather = document.querySelector(".main-weather");
let foter = document.querySelector(".foter");

prevPage.addEventListener("click", () => {
  history.back();
});

// weather object;

let CityObj = {
  Tehran: {
    temp: "13°C",
    title: "Broken Clouds",
    loc: "Iran, Tehran",
    feels: "17°C",
    hum: "7%",
  },
  Tabriz: {
    temp: "-5°C",
    title: "Periodic Clouds",
    loc: "Iran, Tabriz",
    feels: "5°C",
    hum: "10%",
  },
  Shiraz: {
    temp: "5°C",
    title: "Clouds",
    loc: "Iran, Shiraz",
    feels: "9°C",
    hum: "17%",
  },
};

// get Location Search;

let locationSearchParams = new URLSearchParams(location.search);
let searchParam = locationSearchParams.get("city");

let foundCity = CityObj[searchParam];

function createDomElem(city) {
  mainWeather.insertAdjacentHTML(
    "beforeend",
    '<div class="main-temp"><h3>' +
      city.temp +
      '</h3></div><div class="main-title"><p>' +
      city.title +
      '</p></div><div class="main-location"><span class="bi bi-geo-alt">' +
      city.loc +
      "</span></div>"
  );

  foter.insertAdjacentHTML(
    "beforeend",
    '<div class="left"><i class="bi bi-thermometer-sun"></i><span>' +
      city.feels +
      ' <br> <small>Feels Like</small></span></div><div class="right"><i class="bi bi-droplet-half"></i><span>' +
      city.hum +
      " <br> <small>Humidity</small></span></div>"
  );
}

createDomElem(foundCity);
