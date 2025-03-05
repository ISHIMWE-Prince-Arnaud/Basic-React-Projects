import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  console.log("Weather Data in Display:", weatherData);  // Log weather data for debugging

  if (!weatherData) {
    return <p className="message">Search for a city...</p>;
  }

  const { main, weather, name } = weatherData;

  return (
    <div className="weather-display">
      <h2 className="city-name">{name}</h2>
      {main && weather ? (
        <>
          <p className="weather-info">Temperature: {main.temp}°C</p>
          <p className="weather-info">Weather: {weather[0].description}</p>
          <p className="weather-info">Humidity: {main.humidity}%</p>
        </>
      ) : (
        <p className="weather-info">Weather data is unavailable.</p>
      )}
    </div>
  );
};

export default WeatherDisplay;