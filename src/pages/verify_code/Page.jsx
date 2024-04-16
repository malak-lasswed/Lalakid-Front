import React, { Component } from 'react';
import FormVerifyCode from './components/FormVerifyCode';
import SideImage from '../../components/SideImage';

class VerifyCode extends Component {
  render() {
    return (
      <div className='concert-one'>
        <section className="vh-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 text-black">
                <FormVerifyCode />
              </div>
              <SideImage />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default VerifyCode;