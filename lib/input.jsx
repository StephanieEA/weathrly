const React = require('react');
const ReactDOM = require('react-dom');

class Input extends React.Component{

  render (input){
    return(
      <input className='input-location'
              placeholder='city'
              onChange={(e) => this.props.onChange(e)}/>
    )
  }
}

module.exports = Input
