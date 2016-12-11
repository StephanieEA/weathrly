const React = require('react');
const ReactDOM = require('react-dom');

class Input extends React.Component{
//   // constructor(){
//   //   super();
//   //   if(!localStorage.city){localStorage.city = '[]'}
//   //   const savedCities = JSON.parse(localStorage.city)
//   //   if (savedCities) {
//   //     this.cities = savedCities
//   //   }
//   //   else {
//   //     this.all = []
//   //   }
//   // }
//
  render (input){
    return(
      <input className='input-location'
              placeholder='city'
              onChange={(e) => this.props.onChange(e)}/>
    )
  }
}

module.exports = Input
