function displayTemperature(response) {
let temperatureElement=document.querySelector("#temperature");
temperatureElement.innerHTML=Math.round(response.data.main.temp);
let cityElement=document.querySelector("#city");
cityElement.innerHTML=response.data.name;
let descriptionElement=document.querySelector("#description");
descriptionElement.innerHTML=response.data.weather[0].description;
let humidityElement=document.querySelector("#humidity");
humidityElement.innerHTML=response.data.main.humidity;
console.log(response.data);
let windElement=document.querySelector("#wind");
windElement.innerHTML= Math.round(response.data.wind.speed);
console.log(response.data);
}

let apiKey="32b2bb971e97b5d0e34c0ed7e5a8330d";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
