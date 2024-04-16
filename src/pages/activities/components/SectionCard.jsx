import React, { Component } from 'react';
class SectionCard extends Component {
  render() {
    return (
      <div className="mb-3 border border-3 rounded rounded-4">
        <img className="rounded rounded-4" src={this.props.img} alt="Alphabet"></img>
      </div>

    );
  }
}

export default SectionCard;