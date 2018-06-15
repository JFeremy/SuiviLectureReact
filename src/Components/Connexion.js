import React from "react";

class Connexion extends React.Component {
  goToApp = event => {
    /*
    event.preventDefault();

    //Récupération du pseudo
    const pseudo = this.boxInput.value;
    //Modification de l'URL
    this.context.router.transitionTo(`/box/${pseudo}`);
*/
  };

  render() {
    return (
      <div className="connexionBox">
        <form className="connexion" onSubmit={e => this.goToApp(e)}>
          <h1>Ma Boîte à Recette</h1>
          <input
            type="text"
            placeholder="Nom du Chef !"
            pattern="[A-Za-z]{3,}"
            required
            ref={input => (this.boxInput = input)}
          />
          <button type="submit">Connexion</button>
          <em>
            <small> 3 caractères minimum et pas de caractères spéciaux !</small>
          </em>
        </form>
      </div>
    );
  }

  static contextTypes = {
    //router: React.PropTypes.object
  };
}

export default Connexion;
