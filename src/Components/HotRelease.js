// REACT
import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faIcon from "@fortawesome/fontawesome-free-solid";
// CSS
import "./HotRelease.css";

class HotRelease extends React.Component {
  // STATE

  // CYCLE DE VIE REACT

  // RENDER
  render() {
    return (
      <section>
        <h3>Les sorties récentes</h3>
        <div className="hotReleaseBox">
          <p>test</p>
        </div>
      </section>
    );
  }

  // PROPTYPES
  static propTypes = {
    //add: PropTypes.func.isRequired
  };
}

export default HotRelease;
