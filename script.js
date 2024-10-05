const apiKey = "c4fb564fc87d7935db686a6128db68d2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = city;
        document.querySelector(".temperature").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Км/час";
        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png"
        }
        else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

};

searchButton.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})