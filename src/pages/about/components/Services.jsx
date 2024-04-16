import React, { Component } from 'react';
import ServiceCard from './ServiceCard';

class Services extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2 className="xlabel">Our Services</h2>
        <div className="row">
          <ServiceCard icon="bi bi-pencil-square" name="Interactive Lessons" discription="Engaging and interactive lessons designed specifically for kids to enhance their learning experience. From mathematics to languages, we cover a wide range of subjects to make learning fun and effective." />
          <ServiceCard icon="bi bi-lightbulb" name="Creative Projects" discription="Encourage creativity with our creative projects that challenge kids to think outside the box. From art and crafts to science experiments, there's something for every curious mind." />
          <ServiceCard icon="bi bi-people" name="Collaborative Learning" discription="Foster teamwork and social skills with collaborative learning activities. Our platform allows kids to interact with peers in a safe and supervised environment, promoting communication and cooperation." />
        </div>
      </div>
    );
  }
}

export default Services;
