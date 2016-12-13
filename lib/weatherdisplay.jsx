const React = require('react');

const DailyDisplay = require('./daily-display');

class WeatherDisplay extends React.Component {

  render() {
    return (
        <section>
          <DailyDisplay
            location={this.props.location}
            display={this.props.display}
          />
        </section>
      );
  }
}

module.exports = WeatherDisplay;
