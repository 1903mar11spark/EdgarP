window.onload = function() {
    document.getElementById("searchBtn").addEventListener('click', getInput);
};

const apiKey = '550ecd220be9ceb03d7ceb066a4e9011';
let units = 'imperial';

function getWeather(searchCity){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&APPID=${apiKey}&units=${units}`, {method:"GET", headers:{"Accept":"application/json"}})
    .then((response) => {
        return response.json();
    })
    .then((data)=> {
        console.log(data);
        atStart(data);
    })
}

function atStart(data){
    switch (data.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = "url('Clear.jpg')";
            break;
        case 'Clouds':
            document.body.style.backgroundImage = "url('cloudy.jpg')";
            break;
        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = "url('rain.jpg')";
            break;
        case 'Thunderstorm':
            document.body.style.backgroundImage = "url('storm.jpg')";
            break;
        case 'Snow':
            document.body.style.backgroundImage = "url('snow.jpg')";
            break;
    
        default:
            break;
    }

    let weatherDescriptionHeader = document.getElementById("weatherDescriptionHeader");
    let dataDescription = data.weather[0].description;
    weatherDescriptionHeader.innerHTML = dataDescription.charAt(0).toUpperCase() + dataDescription.slice(1);

    let temperature = document.getElementById("temperature");
    temperature.innerHTML = Math.floor(data.main.temp) + '&#176';

    let humidity = document.getElementById("humidity");
    humidity.innerHTML = "Humidity at " + data.main.humidity + "%";

    let windSPeed = document.getElementById("windSpeed");
    windSpeed.innerHTML = " Winds at " + Math.floor(data.wind.speed) + " mph";

    let cityHeader = document.getElementById("cityHeader");
    cityHeader.innerHTML = data.name;

    let weatherImg = document.getElementById("documentImg");
    weatherImg.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + ".png";
    
}

function getInput(){
    let searchCity = document.getElementById("searchInput").value;
    if(searchCity){
        getWeather(searchCity);
    }
}