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
  convertirPseudo = pseudo => {
    return /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`;
  };

  // RENDER
  render() {
    return (
      <header>
        <nav>
          <div className="buttonMenu">
            <FontAwesomeIcon icon={faIcon.faBars} />{" "}
          </div>

          <ul className="dropdownMenu">
            <li>Ajouter</li>
            <li>Modifier</li>
            <li>Profil</li>
            <li>Déconnexion</li>
          </ul>
          <h1>La bibliothèque {this.convertirPseudo(this.props.pseudo)}</h1>

          <div
            className="buttonMenu"
            onClick={e => this.props.changerAffichage()}
          >
            <FontAwesomeIcon
              className="buttonMenu"
              icon={
                this.props.affichage === "grille"
                  ? faIcon.faThList
                  : faIcon.faTh
              }
            />
          </div>
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
