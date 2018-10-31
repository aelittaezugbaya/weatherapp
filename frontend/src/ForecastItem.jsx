import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function formateTime(seconds) {
  return moment(seconds * 1000).format('HH:mm');
}

function ForecastItem({ forecast }) {
  const icon = forecast.weather[0].icon;
  return (
    <div className="icon-container">
      <div className="forecast-icon" >
        {icon && <img alt={forecast.weather[0].main} src={`/img/${icon.slice(0, -1)}.svg`} />}
      </div>
      <div className="text-forecast">{formateTime(forecast.dt)}</div>
    </div>
  );
}

ForecastItem.propTypes = {
  forecast: PropTypes.shape({
    icon: PropTypes.string,
    weather: PropTypes.array,
    dt: PropTypes.number,
  }),
};

ForecastItem.defaultProps = {
  forecast: null,
};

export default ForecastItem;
