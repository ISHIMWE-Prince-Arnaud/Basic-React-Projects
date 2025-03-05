import { useState } from "react";

function Search({ onSearch }) {
  const [city, setCity] = useState("");

  // Handle form submission and search for the weather
  function handleSubmit(e) {
    e.preventDefault();
    console.log("City:", city);  // Log the city to verify it's being passed

    if (city.trim() !== "") {
      onSearch(city);  // Call onSearch passed from parent (Weather.js)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}  // Update city state as user types
        placeholder="Enter City Name..."
        className="input-field"
      />
      <button type="submit" className="submit-button">Search</button>
    </form>
  );
}

export default Search;