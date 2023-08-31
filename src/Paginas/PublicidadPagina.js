import React from 'react';

export default class WeatherApp extends React.Component {
  state = {
    weatherData: null,
    cityInput: '',
  };

  handleInputChange = event => {
    this.setState({ cityInput: event.target.value });
  };

  fetchWeatherData = () => {
    const apiKey = '46ef44ed62154f98d91a333a6845fec9'; 
    const { cityInput } = this.state;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        this.setState({ weatherData: data });
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  };

  render() {
    const { weatherData, cityInput } = this.state;

    return (
      <div>
        <h1 style={{color:'#cb3636'}}>App del Clima</h1>
        <div>
          <input
            type="text"
            placeholder="Ingresa la ciudad"
            value={cityInput}
            onChange={this.handleInputChange}
            style={{
                backgroundColor: 'white',
                color: 'black',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                margin: "20px"
              }}
          />
          <button style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
            }} onClick={this.fetchWeatherData}>Obtener el clima</button>
        </div>
        {weatherData && (
          <div>
            <h2 style={{color:'#cb3636'}}>{weatherData.name}:</h2>
            {weatherData.sys && weatherData.sys.country && (
              <p><b style={{color:'white'}}>País:</b> {weatherData.sys.country}</p>
            )}
            {weatherData.main && (
              <p><b style={{color:'white'}}>Temperatura:</b> {weatherData.main.temp}°C</p>
            )}
            {weatherData.weather && weatherData.weather[0] && (
              <p><b style={{color:'white'}}>Clima:</b> {weatherData.weather[0].description}</p>
            )}
          </div>
        )}
      </div>
    );
  }
}