import React, { Component } from 'react';
import LevelCard from './LevelCard';

class Levels extends Component {
  handleClick = (index) => {
    this.props.onLevelChange(index);
  };

  render() {
    const { levels, selectedLevel } = this.props;

    return (
      <div className="list-group">
        <button type="button" className="list-group-item list-group-item-action text-center" aria-current="true">
          Progress
        </button>
        {levels.map((level, index) => (
          <button
            key={index}
            type="button"
            className={`list-group-item list-group-item-action ${selectedLevel === index ? 'bg-warning' : ''}`}
            onClick={() => this.handleClick(index)}
            disabled={level.disable === true}
          >
            {`level ${index + 1}`}
          </button>
        ))}
      </div>
    );
  }
}

export default Levels;
