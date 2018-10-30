import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getForecastFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/forecast`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

export default class ForecastContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: null
    };
  }

  async componentDidMount() {
    const forecast = await getForecastFromApi();
    this.setState({ forecast: forecast });
  }

  formateTime(text) {

    return text.slice(11, 16)
  }


  render() {
    const { forecast } = this.state;
    console.log(forecast)
    const items = forecast ? forecast.map(data => {
      return <div className="icon-container">
        <div className="forecast-icon" key={data.dt}>
          {data.weather[0].icon && <img alt={data.weather[0].main} src={`/img/${data.weather[0].icon.slice(0, -1)}.svg`} />}
        </div>
        <div className='text-forecast'>{this.formateTime(data.dt_txt)}</div>
      </div>
    }) : [];

    console.log(items)

    return (
      <div className="forecast-container">
        {items}
      </div>
    );
  }
}