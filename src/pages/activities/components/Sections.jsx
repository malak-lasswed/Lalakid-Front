import React, { Component } from 'react';
import SectionCard from './SectionCard';
import Alphabet from "../../assets/Alphabet.svg"
import Numbers from "../../assets/Numbers.svg"
import Colors from "../../assets/Colors.svg"
class Sections extends Component {
  render() {
    return (
      <div className="px-3">
        <SectionCard name="Alphabet" img={Alphabet} />
        <SectionCard name="Numbers" img={Numbers} />
        <SectionCard name="Colors" img={Colors} />

      </div>

    );
  }
}

export default Sections;