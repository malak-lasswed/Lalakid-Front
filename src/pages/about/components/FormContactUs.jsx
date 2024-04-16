import React, { Component } from 'react';
import Button from '../../../components/Button';
class FormContactUs extends Component {
  render() {
    return (
      <div className="container mb-4">
        <section id="contact">
          <h2>Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            <Button name="submit" type="button" />
          </form>
        </section>
      </div>
    );
  }
}

export default FormContactUs;