import React, { Component } from 'react';
import FormSignup from './components/FormSignup';
import SideImage from '../../components/SideImage';

export default class Signup extends Component {
  render() {
    return (
      <div className='concert-one'>
        <section className="vh-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 text-black">
                <FormSignup />
              </div>

              <SideImage />


            </div>
          </div>
        </section>
      </div>
    );
  }
}