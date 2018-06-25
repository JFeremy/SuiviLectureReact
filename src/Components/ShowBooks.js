// REACT
import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faIcon from "@fortawesome/fontawesome-free-solid";
// CSS
import "./ShowBooks.css";

class ShowBooks extends React.Component {
  // STATE
  // FONCTION
  updateChapter = event => {
    event.preventDefault();
  };
  // CYCLE DE VIE REACT

  // RENDER
  render() {
    return (
      <div className="cards">
        <div className={this.props.view + "-card"}>
          <div className="info-card">
            <div className="img-info-card">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/scanmanga-8152c.appspot.com/o/U33brRe65gYIWajOAgrDgvHgKMr2%2Fstar-martial-god-technique?alt=media&token=3b9bcce8-88de-441e-a0bf-0960ee6adae9"
                alt="test"
              />
            </div>
            <div className="txt-info-card">
              <h3>THE GAMERS</h3>
              <h4>AVANCEMENT : 50</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // PROPTYPES
  static propTypes = {
    view: PropTypes.string.isRequired
  };
}

export default ShowBooks;
