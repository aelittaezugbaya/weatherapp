import React from 'react';
import moment from 'moment';

function formateTime(seconds) {
  return moment(seconds * 1000).format('HH:mm');
}
export default class ForecastItem extends React.Component {
  render(){
    const {forecast} = this.props;
    console.log(forecast);
    const icon = forecast.weather[0].icon;
    return(
      <div className="icon-container" key={forecast.dt}>
          <div className="forecast-icon" >
          {icon && <img alt={forecast.weather[0].main} src={`/img/${icon.slice(0, -1)}.svg`} />}
          </div>
          <div className="text-forecast">{formateTime(forecast.dt)}</div>
      </div>
    );
  }
}