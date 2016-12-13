const React = require('react');

class Input extends React.Component {
  render() {
    return (
      <input className='input-location'
              placeholder='city'
              onChange={(e) => this.props.onChange(e)}/>
    );
  }
}

module.exports = Input;
