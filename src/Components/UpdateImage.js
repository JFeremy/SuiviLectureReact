//REACT
import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faIcon from "@fortawesome/fontawesome-free-solid";
// CSS

class UpdateImage extends React.Component {
  static defaultProps = {
    book: {}
  };
  static propTypes = {
    book: PropTypes.object.isRequired,
    saveImage: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired,
    makeActions: PropTypes.func.isRequired
  };
  // STATE
  // CYCLE DE VIE REACT
  // FONCTIONS

  //RENDER
  render() {
    return (
      <div className="action-card">
        <div className="changeImage">
          <div className="img-form">
            <img src={this.props.book.image} alt={this.props.book.title} />
          </div>
          <div className="book-info">
            <h3>{this.props.book.title}</h3>
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
                    this.props.book.id
                  )
                }
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            if (window.confirm("Confirmer la suppression?")) {
              this.props.deleteBook();
              this.props.makeActions("hideAction");
            }
          }}
          className="delete-book"
        >
          {`SUPPRIMER ${this.props.book.title}`}
        </button>
      </div>
    );
  }
}

export default UpdateImage;
