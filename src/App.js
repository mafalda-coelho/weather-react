import "./App.css";

import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherSearch />
        <h4>
          <h4>
            <a href="https://github.com/mafalda-coelho/weather-react">
              Open-source code{" "}
            </a>{" "}
            by Mafalda Coelho.
          </h4>
        </h4>
      </header>
    </div>
  );
}

export default App;
