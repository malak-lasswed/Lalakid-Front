import React, { Component } from 'react';
import SuccessOperation from './components/SuccessOperation';
import SideImage from '../../components/SideImage';

class Success extends Component {
  render() {
    return (
      <div className='concert-one'>
        <section className="vh-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 text-black">
                <SuccessOperation />
              </div>
              <SideImage />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Success;