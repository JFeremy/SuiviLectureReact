// REACT
import React from "react";
import PropTypes from "prop-types";
// COMPONENTS
import Header from "./Header";

class App extends React.Component {
  // STATE
  state = {
    lectures: {},
    affichage: "grille"
  };

  // CYCLE DE VIE REACT
  // FONCTIONS
  changerAffichage = () => {
    console.log(this.state.affichage);
    const aff = this.state.affichage === "grille" ? "liste" : "grille";
    this.setState({
      affichage: aff
    });
  };

  // RENDER
  render() {
    return (
      <div>
        <Header
          pseudo={this.props.match.params.pseudo}
          affichage={this.state.affichage}
          changerAffichage={this.changerAffichage}
        />
        <div className="box">
          <h1>{this.props.match.params.pseudo}</h1>
        </div>
      </div>
    );
  }

  // PROPTYPES
  static propTypes = {
    //match: PropTypes.object.isRequired
  };
}

export default App;
