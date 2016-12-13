const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

const WeatherDisplay = require('./weatherdisplay');
const Input = require('./input');
const Submit = require('./submit');

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      location: '',
    };
  }

  componentWillMount() {
    this.getLocation();
    this.getWeather();
  }

  getLocation() {
    if (!localStorage.city) localStorage.city = '""';
    const savedCity = JSON.parse(localStorage.city);
    if (savedCity) {
      this.setState({ location: savedCity });
    } else {
      this.setState({ location: '' });
    }
  }

  getWeather() {
    $.get('http://weatherly-api.herokuapp.com/api/weather', (response) => {
      this.setState({ weather: response });
    });
  }

  handleChange(e) {
    this.setState({ temporary: e.target.value });
  }

  saveLocation() {
    const inputCity = this.state.temporary;
    const realCity = this.state.weather.filter((data) => data.location === inputCity);
    if (realCity) {
      this.setState({ location: inputCity });
    }
    localStorage.city = JSON.stringify(inputCity);
    this.getWeather();
  }

  render() {
    return (
      <section className ='app'>
        <h1>Weathrly </h1>
        <h2>Location</h2>
        <Input value = { this.state.location }
              onChange={(e) => this.handleChange(e)} />
        <Submit saveLocation={ this.saveLocation.bind(this) }/>
        <WeatherDisplay display={this.state.weather}
                        location ={this.state.location}
                        temporary ={this.state.temporary}
                      />
      </section>
    );
  }
}


ReactDOM.render(< Main />, document.getElementById('application'));
