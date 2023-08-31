import React from 'react';

export default class WeatherApp extends React.Component {
  state = {
    weatherData: null,
  };

  componentDidMount() {
    const apiKey = '46ef44ed62154f98d91a333a6845fec9'; // Reemplaza con tu clave de API de OpenWeatherMap
    const city = 'California'; // Cambia a la ciudad para la que deseas obtener el pronóstico

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        this.setState({ weatherData: data });
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }

  render() {
    const { weatherData } = this.state;

    return (
      <div>
        <h1>Weather App</h1>
        {weatherData && (
          <div>
            <h2>{weatherData.name}</h2>
            {weatherData.sys && weatherData.sys.country && (
              <p>Country: {weatherData.sys.country}</p>
            )}
            {weatherData.main && (
              <p>Temperature: {weatherData.main.temp}°C</p>
            )}
            {weatherData.weather && weatherData.weather[0] && (
              <p>Weather: {weatherData.weather[0].description}</p>
            )}
          </div>
        )}
      </div>
    );
  }
}