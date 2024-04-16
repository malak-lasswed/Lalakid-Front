import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import facebook from "../assets/icons/facebook.svg";
import twitterx from "../assets/icons/twitterx.svg";
import instagram from "../assets/icons/instagram.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white mt-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>We're Bit-Code, a dedicated team of developers with a mission to simplify life through technology. With creativity and expertise, we craft innovative solutions that make a difference. Welcome to Bit-Code, where innovation meets simplicity.</p>
              <p>Contact us at: <a href="mailto:contact@bitcode.com" className='link-warning'>contact@bitcode.com</a></p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/" className='link-warning'>Home</Link></li>
                <li><Link to="/services" className='link-warning'>Services</Link></li>
                <li><Link to="/about" className='link-warning'>About</Link></li>
                <li><Link to="/contact" className='link-warning'>Contact</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Stay Connected</h5>
              <p>Follow us on social media:</p>
              <div className="d-flex">
                <a href="#"><img src={facebook} alt="Facebook" height="35" width="35" className="mr-2 " style={{ backgroundColor: '#ccc' }} /></a>
                <a href="#"><img src={twitterx} alt="Twitterx" height="35" width="35" className="mr-2 " style={{ backgroundColor: '#ccc' }} /></a>
                <a href="#"><img src={instagram} alt="Instagram" height="35" width="35" style={{ backgroundColor: '#ccc' }} /></a>
              </div>
              <form className="mt-3">
                <div className="form-group">
                  <div className="mb-2">
                    <label htmlFor="email">Subscribe to our newsletter:</label>
                  </div>
                  <div className="input-group">
                    <input type="email" className="form-control" id="email" placeholder="Your email" required />
                    <div className="input-group-append">
                      <button className="btn btn-warning" type="submit">Subscribe</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12 text-center">
              <p>&copy; 2024 Lalakid. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
