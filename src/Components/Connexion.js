//REACT
import React from "react";
import base from "../Base";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faIcon from "@fortawesome/fontawesome-free-brands";
import { Redirect } from "react-router-dom";
//CSS
import "./Connexion.css";

class Connexion extends React.Component {
  state = {
    pseudo: null
  };

  componentDidMount() {
    this.setState({
      pseudo: localStorage.getItem("pseudo")
    });
  }

  connexion = provider => {
    //console.log(`Tentative de connexion avec ${provider}`);
    var authProvider;

    switch (provider) {
      case "facebook":
        authProvider = new base.auth.FacebookAuthProvider();
        break;
      case "twitter":
        authProvider = new base.auth.TwitterAuthProvider();
        break;
      case "google":
        authProvider = new base.auth.GoogleAuthProvider();
        break;
      default:
        break;
    }

    base
      .auth()
      .signInWithPopup(authProvider)
      .then(result => this.traiterConnexion(null, result))
      .catch(error => this.traiterConnexion(error, null));
  };

  traiterConnexion = (err, authData) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(authData);
      localStorage.setItem("pseudo", authData.user.displayName);
      localStorage.setItem("uid", authData.user.uid);
      this.setState({
        pseudo: authData.user.displayName
      });
    }
  };

  renderRedirect = () => {
    return (
      <Redirect
        to={{
          pathname: `/library/${this.state.pseudo}`,
          state: { pseudo: this.state.pseudo }
        }}
      />
    );
  };

  render() {
    return this.state.pseudo ? (
      <div>{this.renderRedirect()}</div>
    ) : (
      <div className="connexionBox">
        <div className="connexionTitle">
          <h1>Le suivi de mes lectures</h1>
        </div>
        <div className="connexionLinks">
          <button
            className="facebook-button"
            onClick={() => this.connexion("facebook")}
          >
            <FontAwesomeIcon icon={faIcon.faFacebookF} />
          </button>
          <button
            className="twitter-button"
            onClick={() => this.connexion("twitter")}
          >
            <FontAwesomeIcon icon={faIcon.faTwitter} />
          </button>
          <button
            className="google-button"
            onClick={() => this.connexion("google")}
          >
            <FontAwesomeIcon icon={faIcon.faGoogle} />
          </button>
        </div>
        <div className="connexionSubtitle">
          <h3>Il suffit de se connecter pour gérer ses lectures !</h3>
        </div>
      </div>
    );
  }
}

export default Connexion;
