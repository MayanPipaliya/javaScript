const WeatherData = async (city = "mumbai") => {

    let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1ade3a73dfb801b49cb488a651b81821&units=metric`);
    let response = await request.json();
    console.log(response);

    uimaker(response)
};

WeatherData();

const uimaker = (data) => {
    document.getElementById("WeatherData").innerHTML = `
    </div>
      <div class="weather-card">
        <div class="search">
          <input type="search" placeholder="enter city name"  spellcheck="false">
          <button>
            <i class="bi bi-search id="form""></i>
          </button>
        </div>
        <div class="weather">
          <img class="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="...">
          <h1 class="temp">${data.main.temp}</h1>
          <h2 class="city">${data.name}</h2>
          <div class="details">
            <div style="display: flex;" class="col">
              <img class="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png">
              <div class="info">
                <p class="humidity">${data.main.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div class="col">
              <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png">
              <div class="info">
                <p class="wind">${data.wind.speed}km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `



    const handleSubmit = (e) => {
        e.preventDefault();
        let city = document.getElementById("city").value

        WeatherData(city)
    }
    document.getElementById("form").addEventListener("click", handleSubmit)
}