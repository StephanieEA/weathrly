const React = require('react');
const ReactDOM = require('react-dom');

class DailyDisplay extends React.Component {

  render() {
    let dayArray = this.props.week;
    console.log(this.props.week)
    if (dayArray) {
      dayArray = dayArray.map(function(data, index){
        return (<article key={index}>
        {data.date}
        {data.weatherType.type}
        {data.temp.high}
        {data.temp.low}
        </article>
        )
      })
    }
    return (
      <article>
        {dayArray}
      </article>
    )
  }
}
module.exports = DailyDisplay
