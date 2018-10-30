import React from 'react';
import ReactDOM from 'react-dom';
import ForecastContainer from './ForecastContainer';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: '',
    };
  }

  async componentWillMount() {
    const weather = await getWeatherFromApi();
    this.setState({ icon: weather.icon.slice(0, -1) });
  }

  render() {
    const { icon } = this.state;

    return (
      <div className="main">
        <div className="weather-container">
          {icon && <img className="icon" alt={icon} src={`/img/${icon}.svg`} />}
        </div>
        <ForecastContainer />
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
