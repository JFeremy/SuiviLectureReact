// REACT
import React from "react";
import base from "../Base";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Header from "./Header";
import ManageBook from "./ManageBook";
import HotRelease from "./HotRelease";
import ShowBooks from "./ShowBooks";
import Footer from "./Footer";
// CSS
import "./App.css";

class App extends React.Component {
  // STATE
  state = {
    books: {},
    view: "grid",
    pseudo: ""
  };

  componentWillUnmount() {
    base
      .database()
      .ref(localStorage.getItem("uid") + "/")
      .off();
  }
  // CYCLE DE VIE REACT
  componentWillMount() {
    this.setState({ pseudo: localStorage.getItem("pseudo") });
    this.ref = base.database().ref(localStorage.getItem("uid") + "/");
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
    localStorage.clear();
    this.setState({ pseudo: null });
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
        <div className="page">
          <Header pseudo={this.state.pseudo} />
          <div className="box">
            {/*
            <HotRelease />
          */}
            <ShowBooks view={this.state.view} />
            <ManageBook show={true} titleBook="" action="chapter" />
          </div>
          <Footer
            add={this.add}
            view={this.state.view}
            changeView={this.changeView}
            logOut={this.logOut}
          />
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
