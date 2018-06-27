// REACT
import React from "react";
import base from "../Base";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Header from "./Header";
import ManageBook from "./ManageBook";
import HotRelease from "./HotRelease";
import Footer from "./Footer";
import Card from "./Card";
// CSS
import "./App.css";

class App extends React.Component {
  // STATE
  state = {
    books: {},
    viewList: false,
    actionShow: false,
    action: "add",
    pseudo: "NAME",
    book: {}
  };

  // CYCLE DE VIE REACT
  componentWillUnmount() {
    base
      .database()
      .ref(localStorage.getItem("uid") + "/")
      .off();
  }

  componentWillMount() {
    this.setState({
      pseudo: localStorage.getItem("pseudo")
    });

    const user = localStorage.getItem("uid");
    const itemsRef = base
      .database()
      .ref(`${user}`)
      .orderByKey();
    const books = { ...this.state.books };
    // Récupération des livres
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      console.log(items);
      for (let item in items) {
        base
          .storage()
          .ref(`${user}/${item}`)
          .getDownloadURL()
          .then(url => {
            books[`${item}`] = {
              id: item,
              title: items[item].title,
              chapter: items[item].chapter,
              image: url
            };
            //console.log(books);
            this.setState({ books: books });
          });
      }
    });
  }

  // FONCTIONS
  makeActions = button => {
    let viewList = this.state.viewList;
    let action = this.state.action;
    let actionShow = this.state.actionShow;

    switch (button) {
      case "changeView":
        viewList = !this.state.viewList;
        actionShow = false;
        break;
      case "showAdd":
        action = "add";
        actionShow = true;
        break;
      case "hideAction":
        actionShow = false;
        break;
      case "logOut":
        localStorage.clear();
        this.setState({ pseudo: null });
        break;
      default:
        break;
    }
    this.setState({
      viewList: viewList,
      action: action,
      actionShow: actionShow
    });
  };

  showActionBook = idBook => {
    this.setState({
      actionShow: !this.state.actionShow,
      action: "chapter",
      book: this.state.books[idBook]
    });
  };

  updateBook = (id, title, chapter, image, isDelete) => {
    const books = { ...this.state.books };
    if (isDelete) books[`${id}`] = null;
    else {
      books[`${id}`] = {
        id: id ? id : books[`${id}`].id,
        title: title ? title : books[`${id}`].title,
        chapter: chapter ? chapter : books[`${id}`].chapter,
        image: image ? image : books[`${id}`].image
      };
      console.log(books[`${id}`]);
    }

    this.setState({ books: books });
  };

  // RENDER
  renderRedirect() {
    return <Redirect to={{ pathname: `/` }} />;
  }

  render() {
    const cards = Object.keys(this.state.books)
      .sort()
      .map(key => (
        <Card
          key={key}
          details={this.state.books[key]}
          viewList={this.state.viewList}
          onClick={() => this.showActionBook(key)}
        />
      ));

    return !this.state.pseudo ? (
      this.renderRedirect()
    ) : (
      <div className="page">
        <Header pseudo={this.state.pseudo} />
        <div className="box">
          <HotRelease />
          <div className="cards">{cards}</div>
          <ManageBook
            show={this.state.actionShow}
            book={this.state.book}
            action={this.state.action}
            makeActions={this.makeActions}
            updateBook={this.updateBook}
          />
        </div>
        <Footer makeActions={this.makeActions} viewList={this.state.viewList} />
      </div>
    );
  }
}

export default App;
