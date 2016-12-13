const React = require('react');

class DailyDisplay extends React.Component {

  render() {
    let dayArray = this.props.display;
    if (dayArray) {
      dayArray = dayArray.filter((dailyData) =>
        dailyData.location === this.props.location);
      dayArray = dayArray.slice(0, 7);
      dayArray = dayArray.map((data, index) =>
        (<article key={index}>
            <ul>
              <li>{data.date}</li>
              <li>{data.weatherType.type}</li>
              <li>High of {data.temp.high}</li>
              <li>Low of {data.temp.low}</li>
            </ul>
        </article>
        )
      );
    }
    return (
      <section>
        <h3>Weekly Forecast</h3>
        {dayArray}
      </section>
    );
  }
}
module.exports = DailyDisplay;
