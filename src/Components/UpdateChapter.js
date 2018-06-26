//REACT
import React from "react";
import base from "../Base";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faIcon from "@fortawesome/fontawesome-free-solid";

class UpdateChapter extends React.Component {
  static defaultProps = {
    book: {}
  };
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired
  };
  // STATE

  // CYCLE DE VIE REACT
  componentDidMount = () => {
    this.chapter.value = parseFloat(this.props.book.chapter, 10);
  };

  // FONCTIONS
  changerTxtChapter = () => {
    if (parseFloat(this.chapter.value, 10) < 0) this.chapter.value = 0;

    const user = localStorage.getItem("uid");
    base
      .database()
      .ref(`${user}/${this.props.book.id}/`)
      .update({
        chapter: this.chapter.value
      })
      .then(() => {
        this.props.updateBook(
          this.props.book.id,
          this.props.book.titre,
          this.chapter.value,
          this.chapter.image,
          false
        );
      });
  };

  moveChapter(up) {
    if (up) this.chapter.value = parseFloat(this.chapter.value, 10) + 1;
    else this.chapter.value = parseFloat(this.chapter.value, 10) - 1;
    this.changerTxtChapter();
  }

  //RENDER
  render() {
    return (
      <div className="action-card">
        <h3>{this.props.book.title}</h3>
        <div className="changeChapter">
          <button
            className="plus-button"
            onClick={() => this.moveChapter(true)}
          >
            <FontAwesomeIcon icon={faIcon.faPlus} />
          </button>
          <div className="input-form">
            <input
              type="number"
              name="chapter"
              placeholder="1.0"
              step="0.1"
              min="0"
              ref={input => (this.chapter = input)}
              onChange={() => this.changerTxtChapter()}
            />
          </div>

          <button
            className="minus-button"
            onClick={() => this.moveChapter(false)}
          >
            <FontAwesomeIcon icon={faIcon.faMinus} />
          </button>
        </div>
      </div>
    );
  }
}

export default UpdateChapter;
