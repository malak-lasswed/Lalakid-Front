import React, { Component } from 'react';

import AboutNavBar from './components/AboutNavBar';
import Footer from '../../components/Footer';
import FormContactUs from './components/FormContactUs';
import Define from './components/Define';
import Services from './components/Services';
class About extends Component {
      render() {
            return (
                  <div className='concert-one'>
                        <AboutNavBar />
                        <Define />
                        <Services />
                        <FormContactUs />
                        <Footer />
                  </div>
            );
      }
}

export default About;
