import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Button extends Component {
  render() {
    const { type, name, onClick } = this.props;

    return (
      <button
        className="btn btn-warning btn-block"
        type={type}
        onClick={type === 'button' ? onClick : null}
      >
        {name}
      </button>
    );
  }
}
