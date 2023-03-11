let city = document.getElementById("city");
let temp = document.getElementById("temp");
let date = document.getElementById("date");
let weather = document.getElementById("weather");
let hilow = document.getElementById("range");

const API_KEY = "b928ef68fb759bf19fad5d623ee0956d";


async function search (query){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`);
        const data= await response.json();
      
        city.innerHTML=`${data.name},${data.sys.country}`;
        date.innerHTML=(new Date()).toLocaleDateString();
        temp.innerHTML=`${toCelsius(data.main.temp)}°c`;
        weather.innerHTML=data.weather[0].main;
        hilow.innerHTML=`${toCelsius(data.main.temp_min)}°c / ${toCelsius(data.main.temp_max)}°c`; 
    }
    catch (err){
        console.log(err)
    }
}

function onsubmit(event){
    event.preventDefault();
    search(searchBox.value);
}


let form = document.getElementById ("search-form");
let searchBox= document.getElementById ("search-box")
form.addEventListener("submit",onsubmit,true)

function toCelsius (kelvin){
return Math.round(kelvin- 273.15);
}
