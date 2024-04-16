import React, { Component } from 'react';
import Image from '../assets/boy.jpg'

class SideImage extends Component {
  render() {
    return (
      <div className="col-sm-4 px-0 py-0 d-none d-sm-block xsideimage">
        <img
          src={Image}
          alt="Login image"
          className="w-100 vh-100 object-fit-cover xsideimage"
        />
      </div>
    );
  }
}

export default SideImage;
