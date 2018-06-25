//REACT
import React from "react";
import base from "../Base";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faIcon from "@fortawesome/fontawesome-free-solid";

class UpdateChapter extends React.Component {
  // STATE

  // CYCLE DE VIE REACT

  // FONCTIONS
  changerTxtChapter = () => {
    if (parseFloat(this.chapter.value, 10) < 0) this.chapter.value = 0;
  };

  moveChapter = up => {
    if (up) this.chapter.value = parseFloat(this.chapter.value, 10) + 1;
    else this.chapter.value = parseFloat(this.chapter.value, 10) - 1;

    this.changerTxtChapter();
  };

  //RENDER
  render() {
    return (
      <div className="action-card">
        <h3>{this.props.title}</h3>
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

  static propTypes = {
    title: PropTypes.string.isRequired
  };
}

export default UpdateChapter;
