import React, { Component } from 'react';
import FormResetPassword from './components/FormResetPassword';
import SideImage from '../../components/SideImage';

class ResetPassword extends Component {
  render() {
    return (
      <div className='concert-one'>
        <section className="vh-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 text-black">
                <FormResetPassword />
              </div>
              <SideImage />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default ResetPassword;