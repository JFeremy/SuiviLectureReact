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
          <h1>La bibliothèque {this.convertPseudo(this.props.pseudo)}</h1>

          <div className="buttonVue" onClick={e => this.props.changeView()}>
            <FontAwesomeIcon
              icon={this.props.view === "grid" ? faIcon.faThList : faIcon.faTh}
            />
          </div>
        </nav>
      </header>
    );
  }

  // PROPTYPES
  static propTypes = {
    pseudo: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired
  };
}

export default Header;
