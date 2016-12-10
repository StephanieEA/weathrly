const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

const WeatherDisplay = require('./weatherdisplay');
//const Input = require('./input')

class Main extends React.Component {
  constructor (){
    super();
    this.state = {
      location: '',
      date: [],
    }
  }

  componentDidMount() {
    // const savedLocation = JSON.parse(localStorage.city);
    // console.log(localStorage.city)
    // this.getState({city: savedLocation})
  }

  getWeatherData() {
      $.get('http://weatherly-api.herokuapp.com/api/weather', (response) => {
        this.setState({weather: response})
        console.log(this.state.weather)
      })
  }

  saveLocation(){
    this.getWeatherData();
    this.setState({city: this.state.location});
  //  localStorage.city = JSON.stringify(this.state.city)
  }

  render() {
    return (
      <section className ='app'>
        <h1>Welcome!!!</h1>
        <h2>Location</h2>
        <input className='input-location'
              placeholder ='location'
              value = { this.state.location }
              onChange={(e) => {this.setState({location: e.target.value})}}/>
        <button className='submit-location'
                onClick={(e)=> {this.saveLocation(e)}}>
                Submit
        </button>
        <WeatherDisplay display={this.state.weather}
                        location ={this.state.location} />
      </section>
    )
  }
}


ReactDOM.render(< Main title='app' />, document.getElementById('application'));
