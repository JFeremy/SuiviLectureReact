//REACT
import React from "react";
import base from "../Base";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faIcon from "@fortawesome/fontawesome-free-solid";
// CSS

class UpdateImage extends React.Component {
  // STATE
  // CYCLE DE VIE REACT
  // FONCTIONS

  //RENDER
  render() {
    return (
      <div className="change-form">
        <div className="img-form">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/scanmanga-8152c.appspot.com/o/U33brRe65gYIWajOAgrDgvHgKMr2%2Fstar-martial-god-technique?alt=media&token=3b9bcce8-88de-441e-a0bf-0960ee6adae9"
            alt="test"
          />
        </div>
        <div className="book-info">
          <h3>{this.props.title}</h3>
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
                this.props.saveImage(
                  this.thumbnailChange.value,
                  this.props.idBook
                )
              }
            />
          </div>
        </div>
        <button onClick={this.props.deleteBook()} className="delete-book">
          SUPPRIMER
        </button>
      </div>
    );
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    idBook: PropTypes.string.isRequired,
    saveImage: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired
  };
}

export default UpdateImage;
