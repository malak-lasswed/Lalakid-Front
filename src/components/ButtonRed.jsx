import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ButtonRed extends Component {
  render() {
    const { type, name, onClick } = this.props;

    return (
      <button
        className="btn btn-danger btn-block"
        type={type}
        onClick={type === 'button' ? onClick : null}
      ><i className=" bi bi-box-arrow-right"></i>
        {name}
      </button>
    );
  }
}
