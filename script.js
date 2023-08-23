const convertUnixToTime = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  return hours + ":" + minutes.substr(-2);
};

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e72f2e9a54msh81440ed83735a2dp1447a4jsnb264ea182528',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
}
const getWeather = (city)=>{
  cityName.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
  .then(response => response.json())
  .then((response) => {
    console.log(response)
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    //cloud_pct.innerHTML = response.cloud_pct
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = convertUnixToTime(response.sunrise); // Convert and update sunrise time
    sunset.innerHTML = convertUnixToTime(response.sunset);
  })
  .catch(err => console.error(err));
  }

  submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
  })

  getWeather("Delhi")

  const cities = [
    { name: "London", id: "london" },
    { name: "Beijing", id: "beijing"},
    { name: "Mumbai", id: "mumbai"},
    { name: "Georgia", id: "georgia"},
    // Add more cities here
  ];
  const updateCityWeatherInTable = (city) => {
    const cityId = city.id;
    const cityCloudPct = document.getElementById(`cloud_pct_${cityId}`);
    const cityTemp = document.getElementById(`temp_${cityId}`);
    const cityfeels_like = document.getElementById(`feels_like_${cityId}`);
    const cityhumidity = document.getElementById(`humidity_${cityId}`);
    const citymin_temp = document.getElementById(`min_temp_${cityId}`);
    const citymax_temp = document.getElementById(`max_temp_${cityId}`);
    const citywind_speed = document.getElementById(`wind_speed_${cityId}`);
    const citywind_degrees = document.getElementById(`wind_degrees_${cityId}`);
    const citysunrise = document.getElementById(`sunrise_${cityId}`);
    // Add similar variables for other data points
  
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city.name, options)
      .then(response => response.json())
      .then((response) => {
        
        cityCloudPct.innerHTML = response.cloud_pct;
        cityTemp.innerHTML = response.temp;
        cityfeels_like.innerHTML = response.feels_like;
        cityhumidity.innerHTML = response.humidity;
        citymin_temp.innerHTML = response.min_temp;
        citymax_temp.innerHTML = response.max_temp;
        citywind_speed.innerHTML = response.wind_speed;
        citywind_degrees.innerHTML = response.wind_degrees;
        citysunrise.innerHTML = response.sunrise;
        citysunset.innerHTML = response.sunset;
        // Update other data points
      })
      .catch(err => console.error(err));
  };
  
  // Loop through cities and update weather data in the table
  cities.forEach(city => updateCityWeatherInTable(city));
