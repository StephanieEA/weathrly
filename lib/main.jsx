const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

const WeatherDisplay = require('./weatherdisplay');
const Input = require('./input');

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      location: '',
      days: [],
      week: [],
    };
  }

  componentDidMount() {
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
    this.setState({ location: this.state.temporary });
    localStorage.city = JSON.stringify(this.state.location);
    this.getWeather();
  }

  render() {
    return (
      <section className ='app'>
        <h1>Welcome!!!</h1>
        <h2>Location</h2>
        <Input value = { this.state.location }
              onChange={(e) => this.handleChange(e)} />
        <button className='submit-location'
                onClick={(e) => this.saveLocation(e)}>
                Submit
        </button>
        <WeatherDisplay display={this.state.weather}
                        location ={this.state.location}
                        week ={this.state.week}
                      />
      </section>
    );
  }
}


ReactDOM.render(< Main />, document.getElementById('application'));
