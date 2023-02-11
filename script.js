let City = document.querySelector(".City");
let Links = document.querySelector("a");
let btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  let cityName = City.value;
  Links.href = `weather.html?city=${cityName}`;
})