import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  // Store location object (latitude, longitude, city details)
  const [location, setLocation] = useState(null);

  // Store input city name
  const [city, setCity] = useState("");

  // Store weather temperature data
  const [weatherData, setWeatherData] = useState(null);

  // Loading state while fetching API data
  const [isLoading, setIsLoading] = useState(false);

  // Fetch weather data using latitude & longitude
  const fetchWeatherData = async () => {
    // API call for current weather
    try {
      let res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${location?.latitude}&longitude=${location?.longitude}&current_weather=true`,
      );
      // Print temperature in console
      console.log(res.data.current_weather.temperature);

      // Save temperature into state
      setWeatherData(res.data.current_weather.temperature);
    } catch (error) {
      console.error("Error fetching weather data:>>>", error);
    }

    // Stop loading
    setIsLoading(false);
  };

  // Get city coordinates using geocoding API
  const getlocation = async (city) => {
    try {
      // API call for city location
      let location = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`,
      );

      // Check if city exists
      if (!location.data.results) {
        alert("City not found");
        setIsLoading(false);
        return;
      }

      // Print first result in console
      console.log(location.data.results[0]);

      // Save location data into state
      setLocation(location.data.results[0]);
    } catch (error) {
      console.error("Error fetching location data:>>>", error);
      setIsLoading(false);
    }
  };

  // Run whenever location changes
  useEffect(() => {
    // If location exists then fetch weather
    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  // Handle search button click
  const handleSearch = () => {
    // Clear previous weather data
    setWeatherData(null);
    if (city.trim() === "") {
      alert("Please enter city name");
      return;
    }
    // Start loading
    setIsLoading(true);
    // Fetch city location
    getlocation(city);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex-col flex items-center justify-center">
      {/* Input & Button Section */}
      <div>
        {/* City Input */}
        <input
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter your city name"
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-500 m-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Search
        </button>
      </div>

      {/* Loading Text */}
      {isLoading && <h1>Loading...</h1>}

      {/* Show Temperature */}
      {weatherData !== null && <h1>Temperature is {weatherData}°C</h1>}
    </div>
  );
};

export default App;
