const apikey="7ec86a0b1af0f3a1da4109a5c7aadce6";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const serchbox=document.querySelector(".search input");
const serchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response= await fetch(apiUrl + city + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+`°C`;
    document.querySelector(".humidity").innerHTML= Math.round(data.main.humidity)+`%`;
    document.querySelector(".wind").innerHTML=  Math.round(data.wind.speed)+` Km/h`;

    if(data.weather[0].main == "Clouds"){
        weathericon.src="images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src="images/clear.png";
    } else if(data.weather[0].main == "Drizzle"){
        weathericon.src="images/brizzle.png";
    } else if(data.weather[0].main == "Mist"){
        weathericon.src="images/mist.png";
    } else if(data.weather[0].main == "Rain"){
        weathericon.src="images/rain.png";
    } else if(data.weather[0].main == "Snow"){
        weathericon.src="images/snow.png";
    }
    document.querySelector(".weather").style.display="block";
    
}
serchbtn.addEventListener("click", ()=>{
    checkWeather(serchbox.value);

})

