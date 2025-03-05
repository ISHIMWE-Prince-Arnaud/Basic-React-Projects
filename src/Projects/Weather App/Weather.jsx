import axios from "axios";
import { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import Search from "./Search";
import "./WeatherApp.css"

function Weather() {
  const [weather, setWeather] = useState(null);

  // Fetch weather data based on the city entered
  async function fetchWeather(city) {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;  // Ensure the API key is correct in .env file
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(apiUrl);
      console.log("Weather data:", response.data);  // Log the weather data for debugging
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
      setWeather(null);  // Clear weather data if there's an error
    }
  }

  return (
    <div className="weather-container">
      <h1 className="title">Weather App</h1>
      <p className="sub-title">Know weather across the world</p>
      <Search onSearch={fetchWeather} />
      {weather && <WeatherDisplay weatherData={weather} />}
    </div>
  );
}

export default Weather;