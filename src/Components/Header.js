// REACT
import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faIcon from "@fortawesome/fontawesome-free-solid";
// CSS
import "./Header.css";

class Header extends React.Component {
  // STATE
  // CYCLE DE VIE REACT
  // FONCTIONS
  convertPseudo = pseudo => {
    return /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`;
  };

  // RENDER
  render() {
    return (
      <header>
        <nav>
          <h1>La mangathèque {this.convertPseudo(this.props.pseudo)}</h1>
        </nav>
      </header>
    );
  }

  // PROPTYPES
  static propTypes = {
    pseudo: PropTypes.string.isRequired
  };
}

export default Header;
