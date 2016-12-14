import React from 'react';

export class Submit extends React.Component {
  render() {
    let display = this.props.location;
    //console.log(display)


    return (
      <section>
        <button className='submit-button'
          onClick={() => this.props.saveLocation() }>
          Submit
        </button>
      </section>
    );
  }
}

module.exports = Submit;
