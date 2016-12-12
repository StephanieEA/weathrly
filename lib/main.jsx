const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

const WeatherDisplay = require('./weatherdisplay');
const Input = require('./input')

class Main extends React.Component {
  constructor (){
    super();
    this.state = {
      weather: [],
      location: '',
      days: [],
      week: [],
    }
  }

  componentDidMount() {
      this.getLocation();
      this.getWeather();
  }

  getLocation() {
    if (!localStorage.city) localStorage.city = '""'
    const savedCity = JSON.parse(localStorage.city);
    if (savedCity) {
      this.setState({location: savedCity});
    }
    else {
      this.setState({location: ''})
    }
  }

  getWeather(weather) {
    $.get('http://weatherly-api.herokuapp.com/api/weather', (response) => {
      this.setState({weather: response});
      this.setDays(response);
      this.setWeek(response);
      console.log(this.state.week)
    })
  }

  setDays(weather) {
    let weatherDays = weather.map((dailyData) => dailyData.date);
    if (weather){
      this.setState({days: weatherDays})
    }
    else{
      this.setState({days: []});
    }
  }

  setWeek(weather) {
    const weekWeather = weather.slice(0,7);
    this.setState({week: weekWeather});
  }


  handleChange(e) {
    this.setState({location: e.target.value})
  }

  saveLocation(e){
    this.setState({location: this.state.location});
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
                onClick={(e)=> this.saveLocation(e)}>
                Submit
        </button>
        <WeatherDisplay display={this.state.weather}
                        location ={this.state.location}
                        daysplay ={this.state.days}
                        />
      </section>
    )
  }
}


ReactDOM.render(< Main title='app' />, document.getElementById('application'));
