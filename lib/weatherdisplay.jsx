const React = require('react');
const ReactDOM = require('react-dom');



class WeatherDisplay extends React.Component{
  constructor() {
    super();
  }

  render() {
    let weatherArray = this.props.display;
      if (this.props.display){
        weatherArray = weatherArray.filter((dailyData)=>{
          return dailyData.location === this.props.location})
        weatherArray = weatherArray.slice(0,7)  
        weatherArray = weatherArray.map(function(dailyData, index){
          return (<article key={index}>
        <ul>
          <li>{dailyData.date}</li>
          <li> High of {dailyData.temp.high}</li>
          <li> Low of {dailyData.temp.low}</li>
          <li>{dailyData.weatherType.chance} chance {dailyData.weatherType.type}</li>
        </ul>
      </article>)})}

      return (
        <div>{weatherArray}</div>
      )
  }
}
module.exports = WeatherDisplay
