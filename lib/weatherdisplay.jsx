const React = require('react');
const ReactDOM = require('react-dom');

const DailyDisplay = require('./daily-display')

class WeatherDisplay extends React.Component {

  render() {
    let weekWeatherArray = this.props.display;
      if (weekWeatherArray){
        weekWeatherArray = weekWeatherArray.filter((dailyData)=>{
          return dailyData.location === this.props.location});
        weekWeatherArray = weekWeatherArray.slice(0,7);
        weekWeatherArray = weekWeatherArray.map(function(dailyData, index){
          return (<article key={index}>
          {dailyData.date}
           High of {dailyData.temp.high}
           Low of {dailyData.temp.low}
          {dailyData.weatherType.chance} chance {dailyData.weatherType.type}
      </article>)})
    }

      return (
        <section>{weekWeatherArray}
          <DailyDisplay
            display={this.props.weather}
            location={this.props.location}
            daysplay={this.props.days}/>
        </section>
      )
  }
}
module.exports = WeatherDisplay
