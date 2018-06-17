//REACT
import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faIcon from "@fortawesome/fontawesome-free-solid";
import { Redirect } from "react-router-dom";
//CSS
import "./Connexion.css";

class Connexion extends React.Component {
  state = {
    redirect: false,
    pseudo: null
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
      pseudo: this.libInput.value
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: `/library/${this.state.pseudo}`,
            state: { pseudo: this.state.pseudo }
          }}
        />
      );
    }
  };

  render() {
    return (
      <div className="connexionBox">
        {this.renderRedirect()}
        <form className="connexion" onSubmit={() => this.setRedirect()}>
          <h1>Le suivi de mes lectures</h1>
          <input
            type="text"
            placeholder="Nom du Lecteur !"
            pattern="[A-Za-z1-9]{3,}"
            required
            ref={input => (this.libInput = input)}
          />
          <button type="submit">
            Connexion <FontAwesomeIcon icon={faIcon.faSignInAlt} />
          </button>
          <p className="text-center">
            <em> 3 caractères minimum et pas de caractères spéciaux !</em>
          </p>
        </form>
      </div>
    );
  }
}

export default Connexion;
