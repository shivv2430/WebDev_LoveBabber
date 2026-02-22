const APIKEY = "your api key"; // Replace with your actual API key
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
        
        const searchBox = document.getElementById("city-input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon"); 
        
        async function CheckWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${APIKEY}`);
            
            
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
                return ;
            }
            
            else{
               var data = await response.json();

            document.querySelector(".city").innerHTML = data.name ;
            document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";

            const condition = data.weather[0].main;
            
            if (condition === "Clouds") {
                    weatherIcon.src = "Images/clouds.png";
                } else if (condition === "Clear") {
                    weatherIcon.src = "Images/clear.png";
                } else if (condition === "Rain") {
                    weatherIcon.src = "Images/rain.png";
                } else if (condition === "Drizzle") {
                    weatherIcon.src = "Images/drizzle.png";
                } else if (condition === "Mist") {
                    weatherIcon.src = "Images/mist.png";
                } else if (condition === "Snow") {
                    weatherIcon.src = "Images/snow.png";
                } else {
                    weatherIcon.src = "Images/clear.png";
                }


                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
        }
    }
        // Enter key
searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    CheckWeather(searchBox.value.trim());
  }
});

// Search button
searchBtn.addEventListener("click", () => {
  CheckWeather(searchBox.value.trim());
});
        CheckWeather("New york");
