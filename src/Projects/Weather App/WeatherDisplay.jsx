import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  console.log("Weather Data in Display:", weatherData);  // Log weather data for debugging

  if (!weatherData) {
    return <p className="message">Search for a city...</p>;
  }

  const { main, weather, name } = weatherData;

  return (
    <div className="weather-display">
      <div className="city-name">{name}</div>

      {/* Weather info container */}
      <div className="weather-info-container">
        <div className="weather-icon">
          {/* Add the weather icon here */}
          <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt={weather[0].description} />
        </div>

        <div className="weather-info">
          <div className="temperature">{main.temp}°C</div>
          <div className="description">{weather[0].description}</div>
          <div className="extra-info">
            <p>Humidity: {main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;