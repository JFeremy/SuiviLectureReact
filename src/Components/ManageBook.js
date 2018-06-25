//REACT
import React from "react";
import base from "../Base";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faIcon from "@fortawesome/fontawesome-free-solid";
import UpdateChapter from "./UpdateChapter";
import UpdateImage from "./UpdateImage";

// CSS
import "./ManageBook.css";

class ManageBook extends React.Component {
  // STATE
  state = {
    show: false,
    action: "chapter"
  };

  // CYCLE DE VIE REACT
  componentDidMount() {
    this.chapter = this.props.chapter;
    this.setState({ show: this.props.show });
    this.setState({ action: this.props.action });
  }

  // FONCTIONS
  deleteBook() {}
  changeAction = action => {
    this.setState({ action });
  };

  saveImage = (urlImg, nameImg) => {
    // Enregistrement de l'image
    base
      .storage()
      .ref()
      .child(`${localStorage.getItem("uid")}/${nameImg}`)
      .putString(urlImg, "data_url")
      .then(function(snapshot) {
        console.log("Uploaded a data_url string!");
      })
      .catch(function(error) {
        console.log(error);
      });

    /*base
      .storage()
      .ref(nameImg)
      .getDownloadURL()
      .then(function(url) {
        console.log(url);
        return url;
      })
      .catch(function(error) {
        console.log(error);
      });*/
  };

  findChapterInUrl = event => {
    var chapter = event.target.value.split("/")[5].replace(/-/g, "");
    if (!Number.isNaN(Number.parseFloat(chapter))) {
      this.chapter.value = parseFloat(chapter);
    }
  };

  addBook = event => {
    event.preventDefault();
    let elementsUrl = this.link.value.split("/");
    this.saveImage(this.thumbnail.value, elementsUrl[4]);

    const book = {
      id: elementsUrl[4],
      title: elementsUrl[4].replace(/-/g, " "),
      link: this.link.value,
      chapter: this.chapter.value
    };

    base
      .database()
      .ref(`${localStorage.getItem("uid")}/${book.id}`)
      .set(book);

    console.log(book);
    //this.props.ajouterRecette(recette);
    this.bookForm.reset();
  };

  //RENDER
  renderAddBook = () => {
    return (
      <form
        className="add-form"
        ref={input => (this.addBookForm = input)}
        onSubmit={e => this.addBook(e)}
      >
        <h3>
          {this.props.titleBook ? this.props.titleBook : "Ajouter un manga"}
        </h3>
        <div className="input-form">
          <div className="input-tag">
            <FontAwesomeIcon icon={faIcon.faLink} />
          </div>
          <input
            type="url"
            name="link"
            placeholder="Lien du manga"
            ref={input => (this.link = input)}
            required
            onChange={e => this.findChapterInUrl(e)}
          />
        </div>
        <div className="input-form">
          <div className="input-tag">
            <FontAwesomeIcon icon={faIcon.faImage} />
          </div>
          <input
            type="url"
            name="thumbnail"
            placeholder="Adresse de l'image"
            ref={input => (this.thumbnail = input)}
            required
          />
        </div>
        <div className="input-form">
          <div className="input-tag">
            <FontAwesomeIcon icon={faIcon.faHashtag} />
          </div>
          <input
            type="number"
            name="chapter"
            placeholder="1.0"
            step="0.1"
            min="0"
            ref={input => (this.chapter = input)}
            required
          />
        </div>

        <button type="submit" className="add-book">
          Ajouter
        </button>
      </form>
    );
  };

  renderUpdateImage = idBook => {
    return (
      <div
        className="change-form"
        ref={input => (this.updateBookForm = input)}
        onSubmit={e => this.updateBook(e)}
      >
        <div className="img-form">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/scanmanga-8152c.appspot.com/o/U33brRe65gYIWajOAgrDgvHgKMr2%2Fstar-martial-god-technique?alt=media&token=3b9bcce8-88de-441e-a0bf-0960ee6adae9"
            alt="test"
          />
        </div>
        <div className="book-info">
          {this.renderHeaderAction()}
          <div className="input-form">
            <div className="input-tag">
              <FontAwesomeIcon icon={faIcon.faImage} />
            </div>
            <input
              type="url"
              name="thumbnail"
              placeholder="Adresse de l'image"
              ref={input => (this.thumbnailChange = input)}
              onChange={() =>
                this.saveImage(this.thumbnailChange.value, this.idBook)
              }
            />
          </div>
        </div>
      </div>
    );
  };

  renderUpdateBook = () => {
    return (
      <div className="action">
        <div className="choose-action">
          <button
            onClick={e => this.changeAction("chapter")}
            className={
              this.state.action === "chapter"
                ? "chooseChapter active"
                : "chooseChapter"
            }
          >
            CHAPITRE
          </button>
          <button
            onClick={e => this.changeAction("image")}
            className={
              this.state.action === "image"
                ? "chooseImage active"
                : "chooseImage"
            }
          >
            IMAGE
          </button>
        </div>
        {this.state.action === "image" && (
          <UpdateImage
            title="THE GAMER"
            idBook="0"
            saveImage={this.saveImage}
            deleteBook={this.deleteBook}
          />
        )}
        {this.state.action === "chapter" && <UpdateChapter title="THE GAMER" />}
      </div>
    );
  };

  render() {
    if (this.state.show) {
      return (
        <div>
          {this.state.action === "add"
            ? this.renderAddBook()
            : this.renderUpdateBook()}
        </div>
      );
    } else {
      return null;
    }
  }

  static propTypes = {
    //pseudo: React.PropTypes.string.isRequired,
  };
}

export default ManageBook;
