import React, { Component } from 'react';
import Image from "../../../assets/kids.jpg"
import Button from '../../../components/Button';
class Define extends Component {
  render() {
    return (
      <div className="container p-2 mt-5">
        <div className='container mt-3'>
          <div className="row align-items-start">
            <div className="col ">
              <img className="rounded-4" src={Image} height={250}></img>
            </div>
            <div className="col-8">
              <div className="container">
                <h2>Unlock Your Child's Potential</h2>
                <p className="lead xtext">Welcome to LaLakid – where learning takes flight! Our platform is a playground for young minds, offering interactive games, exciting videos, and creative activities designed to fuel your child's imagination and curiosity. Join us today and watch your child soar to new heights of discovery!</p>

              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Define;