import React, { Component } from 'react';
import FormCheckEmail from './components/FormCheckEmail';
import SideImage from '../../components/SideImage';

class CheckEmail extends Component {
  render() {
    return (
      <div className='concert-one'>
        <section className="vh-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 text-black">
                <FormCheckEmail />
              </div>
              <SideImage />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default CheckEmail;