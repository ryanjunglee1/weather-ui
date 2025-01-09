import { useState } from "react";
import axios from 'axios'

const App = () => {
  const [zipcode, setZipcode] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      console.log('fetching weather....')
      const response = await axios.get(
        `http://localhost:3000/weather?zipcode=${zipcode}`,
        { timeout: 2000 }
      );
      console.log(response)
      setWeather(response.data);
      setError("");
    } catch (err) {
      console.log(err)
      setError('Error: ' + err.response.data.error);
      setWeather(null);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1
      style={{ 
        margin: "1% 0",
      }}>
        Weather App
      </h1>
      <input
        type="text"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
        placeholder="Enter Zip Code"
        style={{ 
          margin: "1% 0",
          padding: "10px",
          fontSize: "16px", 
        }}
      />
      <br />
      <button
        onClick={fetchWeather}
        style={{
          padding: "10px",
          margin: "1% 0",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Get Weather
      </button>

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2>{weather.name}</h2>
          <p>
            <strong>Current Temperature:</strong> {weather.temperature} °{weather.units}
          </p>
        </div>
      )}

      {error && (
        <div style={{ marginTop: "20px", color: "red" }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default App;
