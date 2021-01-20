function formatDate(timestamp){
let date= new Date(timestamp);
let hours=date.getHours();
if(hours<10){
hours=`0${hours}`;
}
let minutes=date.getMinutes();
if(minutes<10) {
minutes=`0${minutes}`;
}
let days=[
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
]
let day=days[date.getDay()];
return `${day} ${hours}:${minutes}`;
}

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
let dateElement=document.querySelector("#date");
dateElement.innerHTML=formatDate(response.data.dt*1000);
let iconElement=document.querySelector("#icon");
iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
icon.Element.setAttribute("alt", response.data.weather[0].description);
}

let apiKey="32b2bb971e97b5d0e34c0ed7e5a8330d";
let city="London";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
