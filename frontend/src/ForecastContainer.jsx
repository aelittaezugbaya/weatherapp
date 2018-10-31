import React from 'react';
import ForecastItem from './ForecastItem';

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
      (<ForecastItem forecast={data} key={data.dt} />)
    ) : [];

    return (
      <div className="forecast-container">
        {items}
      </div>
    );
  }
}
