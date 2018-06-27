//REACT
import React from "react";
import base from "../Base";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faIcon from "@fortawesome/fontawesome-free-solid";
import AddBook from "./AddBook";
import UpdateChapter from "./UpdateChapter";
import UpdateImage from "./UpdateImage";

// CSS
import "./ManageBook.css";

class ManageBook extends React.Component {
  static defaultProps = {
    show: false,
    action: "add",
    book: {}
  };
  static propTypes = {
    show: PropTypes.bool.isRequired,
    action: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired,
    makeActions: PropTypes.func.isRequired
  };

  // STATE
  state = {
    action: "add",
    book: {}
  };

  // CYCLE DE VIE REACT
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      show: nextProps.show,
      action: nextProps.action,
      book: nextProps.book
    };
  }
  // FONCTIONS
  changeAction = action => {
    this.setState({ action: action });
  };

  deleteBook = () => {
    base
      .database()
      .ref(`${localStorage.getItem("uid")}/${this.props.book.id}/`)
      .remove();
    this.hideAction();
    this.props.updateBook(this.props.book.id, null, null, null, true);
  };

  saveImage = (urlImg, nameImg) => {
    const user = localStorage.getItem("uid");
    // Enregistrement de l'image
    base
      .storage()
      .ref(`${user}/${nameImg}`)
      .putString(urlImg, "data_url")
      .then(function(snapshot) {
        console.log("Uploaded a data_url string!");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  //RENDER
  renderUpdateBook = () => {
    return (
      <div className="action">
        <div className="choose-action">
          <button
            onClick={() => this.changeAction("chapter")}
            className={
              this.state.action === "chapter"
                ? "chooseChapter active"
                : "chooseChapter"
            }
          >
            CHAPITRE
          </button>
          <button
            onClick={() => this.changeAction("image")}
            className={
              this.state.action === "image"
                ? "chooseImage active"
                : "chooseImage"
            }
          >
            IMAGE
          </button>
          <button
            className="hide-actions"
            onClick={() => this.props.makeActions("hideAction")}
          >
            <FontAwesomeIcon icon={faIcon.faAngleDown} />
          </button>
        </div>
        {this.state.action === "image" && (
          <UpdateImage
            book={this.props.book}
            saveImage={this.saveImage}
            deleteBook={this.deleteBook}
            makeActions={() => this.props.makeActions("hideAction")}
          />
        )}
        {this.state.action === "chapter" && (
          <UpdateChapter
            book={this.props.book}
            updateBook={this.props.updateBook}
          />
        )}
      </div>
    );
  };

  render() {
    if (this.state.show) {
      return this.state.action === "add" ? (
        <AddBook
          saveImage={this.saveImage}
          makeActions={() => this.props.makeActions("hideAction")}
        />
      ) : (
        this.renderUpdateBook()
      );
    } else {
      return null;
    }
  }
}

export default ManageBook;
