const React = require('react');

const DailyDisplay = require('./daily-display');

class WeatherDisplay extends React.Component {

  render() {
    let display = this.props.display;
    display = display.filter((dailyData) =>
          dailyData.location === this.props.location);
    if (display.length === 0) {
      display = <p> fake city fool </p>;
    } else {
      display = <section>
                  <h3>Weekly Forecast</h3>
                  <DailyDisplay
                    location={this.props.location}
                    display={this.props.display}
                  />;
                </section>;
    }
    return (
        <section>
          {display}
        </section>
      );
  }
}

module.exports = WeatherDisplay;
