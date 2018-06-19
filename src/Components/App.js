// REACT
import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Header from "./Header";
import HotRelease from "./HotRelease";
import Footer from "./Footer";

class App extends React.Component {
  // STATE
  state = {
    books: {},
    view: "grid",
    pseudo: ""
  };

  // CYCLE DE VIE REACT
  componentWillMount() {
    this.setState({ pseudo: localStorage.getItem("pseudo") });
  }

  // FONCTIONS
  changeView = () => {
    console.log(this.state.view);

    this.setState({
      view: this.state.view === "grid" ? "list" : "grid"
    });
  };
  add = () => {
    console.log("add");
  };
  update = () => {
    console.log("update");
  };

  logOut = () => {
    console.log("logOut");
    localStorage.removeItem("pseudo");
    this.setState({ pseudo: localStorage.getItem("pseudo", null) });
  };

  // RENDER
  renderRedirect = () => {
    return (
      <Redirect
        to={{
          pathname: `/`
        }}
      />
    );
  };

  render() {
    if (!this.state.pseudo) {
      return <div>{this.renderRedirect()}</div>;
    } else {
      return (
        <div>
          <Header
            pseudo={this.state.pseudo}
            view={this.state.view}
            changeView={this.changeView}
          />
          <div className="box">
            <HotRelease />
          </div>
          <Footer add={this.add} update={this.update} logOut={this.logOut} />
        </div>
      );
    }
  }

  // PROPTYPES
  static propTypes = {
    //match: PropTypes.object.isRequired
  };
}

export default App;
