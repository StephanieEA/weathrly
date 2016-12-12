const React = require('react');
const ReactDOM = require('react-dom');

class DailyDisplay extends React.Component {

  render(){
    let dayArray = this.props.daysplay
    return (
      <div>yo
        {dayArray}
      </div>
    )
  }
}

module.exports = DailyDisplay
