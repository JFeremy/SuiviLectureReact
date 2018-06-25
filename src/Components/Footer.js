// REACT
import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faIcon from "@fortawesome/fontawesome-free-solid";
import { Redirect } from "react-router-dom";
// CSS
import "./Footer.css";

class Footer extends React.Component {
  // STATE

  // CYCLE DE VIE REACT

  // RENDER
  render() {
    return (
      <footer>
        <div className="iconFooter" onClick={() => this.props.add()}>
          <FontAwesomeIcon icon={faIcon.faPlus} />
        </div>
        <div className="divider" />
        <div className="iconFooter" onClick={() => this.props.changeView()}>
          <FontAwesomeIcon
            icon={this.props.view === "list" ? faIcon.faThList : faIcon.faTh}
          />
        </div>
        <div className="divider" />
        <div className="iconFooter" onClick={() => this.props.logOut()}>
          <FontAwesomeIcon icon={faIcon.faSignOutAlt} />
        </div>
      </footer>
    );
  }

  // PROPTYPES
  static propTypes = {
    add: PropTypes.func.isRequired,
    changeView: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired
  };
}

export default Footer;
