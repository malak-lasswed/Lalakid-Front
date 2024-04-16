import React, { Component } from 'react';

class LevelCard extends Component {
  render() {
    return (
      <div className="col-md-3 mb-4 " >
        <div className="haircut-container bg-warning rounded rounded-4">
          <h1>{this.props.name}</h1>
          <div className="haircut-name">{this.props.level}</div>
        </div>
      </div>
    );
  }
}

export default LevelCard;