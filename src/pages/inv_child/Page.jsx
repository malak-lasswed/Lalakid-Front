import React, { Component } from 'react';
import FormInvChild from './components/FormInvChild';
import SideImage from '../../components/SideImage';

export default class InvChild extends Component {
  render() {
    return (
      <div className='concert-one'>
        <section className="vh-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 text-black">
                <FormInvChild />
              </div>

              <SideImage />


            </div>
          </div>
        </section>
      </div>
    );
  }
}