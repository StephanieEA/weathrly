import React from 'react';

export class Submit extends React.Component {
  render() {
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
