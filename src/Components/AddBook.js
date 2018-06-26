//REACT
import React from "react";
import base from "../Base";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faIcon from "@fortawesome/fontawesome-free-solid";
// CSS

class AddBook extends React.Component {
  static defaultProps = {};
  static propTypes = {
    saveImage: PropTypes.func.isRequired,
    hideAction: PropTypes.func.isRequired
  };

  // STATE
  // CYCLE DE VIE REACT
  // FONCTIONS
  findChapterInUrl = event => {
    if (event.target.value.split("/")[5]) {
      var chapter = event.target.value.split("/")[5].replace(/-/g, "");
      if (!Number.isNaN(Number.parseFloat(chapter))) {
        this.chapter.value = parseFloat(chapter);
      } else {
        this.chapter.value = "0";
      }
    }
  };

  addBook = event => {
    event.preventDefault();
    let elementsUrl = this.link.value.split("/");
    this.props.saveImage(this.thumbnail.value, elementsUrl[4]);

    const book = {
      id: elementsUrl[4],
      title: elementsUrl[4].replace(/-/g, " "),
      chapter: this.chapter.value
    };

    base
      .database()
      .ref(`${localStorage.getItem("uid")}/${book.id}`)
      .set(book);

    //console.log(book);
    this.addBookForm.reset();
    this.props.hideAction();
  };

  //RENDER
  render() {
    return (
      <div className="action">
        <div className="aciion-card">
          <form
            className="add-form"
            ref={input => (this.addBookForm = input)}
            onSubmit={e => this.addBook(e)}
          >
            <h3>
              Ajouter un manga{" "}
              <button
                type="button"
                className="hide-actions"
                onClick={e => this.props.hideAction()}
              >
                <FontAwesomeIcon icon={faIcon.faAngleDown} />
              </button>
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
        </div>
      </div>
    );
  }
}

export default AddBook;
