import React from "react";

export default function Weather() {
  return (
    <div class="weather-app">
      <header>
        <form class="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            id="search-form-input"
            class="search-form-input"
          />
          <input type="submit" value="Search" class="search-form-button" />
        </form>
      </header>
      <main>
        <div class="weather-app-data">
          <div>
            <h1 class="weather-app-city" id="city">
              Paris
            </h1>
            <p class="weather-app-details">
              <span id="time">14:05</span> ,{" "}
              <span id="description">broken clouds</span>
              <br />
              Humidity: <strong id="humidity">66%</strong>, Wind:
              <strong id="wind-speed">3.13km/h</strong>
            </p>
          </div>
          <div class="weather-app-temperature-container">
            <div id="icon">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                class="weather-app-icon"
              />
            </div>
            <div class="weather-app-temperature" id="temperature"></div>
            <div class="weather-app-unit">°C</div>
          </div>
        </div>
      </main>

      <footer>
        This project was coded by
        <a href="https://github.com/lmoramaga" target="_blank" rel="noreferrer">
          {" "}
          Lina Moramaga
        </a>
        , is
        <a
          href="https://github.com/lmoramaga/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        and
        <a
          href="https://github.com/lmoramaga/weather-app-react"
          target="_blank"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
