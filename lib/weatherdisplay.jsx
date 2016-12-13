const React = require('react');

const DailyDisplay = require('./daily-display');

class WeatherDisplay extends React.Component {

  render() {
    let weekWeatherArray = this.props.display;
    if (weekWeatherArray) {
      weekWeatherArray = weekWeatherArray.filter((dailyData) =>
        dailyData.location === this.props.location);
      weekWeatherArray = weekWeatherArray.slice(0, 7);
      weekWeatherArray = weekWeatherArray.map((dailyData, index) =>
          (<section key={index}>
          {dailyData.date}
           High of {dailyData.temp.high}
           Low of {dailyData.temp.low}
          {dailyData.weatherType.chance} chance {dailyData.weatherType.type}
      </section>));
    }
    return (
        <section>{weekWeatherArray}
          <DailyDisplay
            location={this.props.location}
            week={this.props.week}
          />
        </section>
      );
  }
}
module.exports = WeatherDisplay;
