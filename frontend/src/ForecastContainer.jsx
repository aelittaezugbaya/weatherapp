import React from 'react';
import moment from 'moment';

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
function formateTime(seconds) {
  return moment(seconds * 1000).format('HH:mm');
}
export default class ForecastContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: null,
    };
  }

  async componentWillMount() {
    const forecast = await getForecastFromApi();
    this.setState({ forecast });
  }

  render() {
    const { forecast } = this.state;
    const items = forecast ? forecast.map(data =>
      (<div className="icon-container" key={data.dt}>
        <div className="forecast-icon" >
          {data.weather[0].icon && <img alt={data.weather[0].main} src={`/img/${data.weather[0].icon.slice(0, -1)}.svg`} />}
        </div>
        <div className="text-forecast">{formateTime(data.dt)}</div>
      </div>)
    ) : [];

    return (
      <div className="forecast-container">
        {items}
      </div>
    );
  }
}
