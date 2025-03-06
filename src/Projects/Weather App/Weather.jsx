import axios from "axios";
import { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import Search from "./Search";
import apiKey from "./API";
import "./WeatherApp.css";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);  // New state for handling no data

  // Fetch weather data based on the city entered
  async function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    setLoading(true);  // Set loading to true when the fetch starts
    setNoData(false);  // Reset noData state before making the request

    try {
      const response = await axios.get(apiUrl);
      console.log("Weather data:", response.data);  // Log the weather data for debugging
      if (response.data.cod === "404") {
        setNoData(true);  // Set noData to true if city is not found (404 error)
      } else {
        setWeather(response.data);
      }
    } catch (error) {
      console.error("Error fetching weather data", error);
      setNoData(true);  // Set noData to true if there's an error
      setWeather(null);  // Clear weather data if there's an error
    } finally {
      setLoading(false);  // Set loading to false after the fetch finishes
    }
  }

  return (
    <div className="weather-container">
      <h1 className="title">Weather App</h1>
      <p className="sub-title">Know weather across the world</p>
      <Search onSearch={fetchWeather} />

      {/* Show loading message while fetching data */}
      {loading && <p className="loading-message">Loading weather data...</p>}

      {/* Show "No data found" message if no valid data is fetched */}
      {noData && !loading && <p className="error-message">No data found for this city. Please try again.</p>}

      {/* Show weather display if data is available */}
      {weather && !loading && !noData && <WeatherDisplay weatherData={weather} />}
    </div>
  );
}

export default Weather;