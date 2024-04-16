import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    const { label, name, type, value, onChange } = this.props;

    return (
      <div className="form-outline mb-2">
        <label className="form-label xlabel" htmlFor={label}>{label}</label>
        <textarea rows="3"
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="form-control"
        />
      </div>
    );
  }
}

export default TextArea;
