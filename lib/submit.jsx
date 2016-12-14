import React from 'react';
import WeatherDisplay from './weatherdisplay'

export class Submit extends React.Component {
  render() {
    let display = this.props.location;
    console.log(display);
    if (display) {
      display = <WeatherDisplay display={this.props.display}
                      location ={this.props.location}
      />;
    } else {
      display = <section></section>;
    }

    return (
      <section>
        <button className='submit-button'
          onClick={() => this.props.saveLocation() }>
          Submit
        </button>
        {display}
      </section>
    );
  }
}

module.exports = Submit;
