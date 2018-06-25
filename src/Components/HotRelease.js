// REACT
import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faIcon from "@fortawesome/fontawesome-free-solid";
// CSS
import "./HotRelease.css";

class HotRelease extends React.Component {
  // STATE
  state = {
    booksRelease: {}
  };
  // FONCTION
  // CYCLE DE VIE REACT
  componentWillMount() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.japscan.cc%2Frss%2F"
    )
      .then(results => {
        let data = results.json().then(data => {
          //console.log(data.items);
          var booksRelease = {};

          // Organisation des livres
          for (let i = 0; i < data.items.length; i++) {
            let title = data.items[i].link.split("/")[4].replace(/-/g, " ");
            // Ajout d'un livre
            booksRelease[`${title}`] = {};
          }
          // Organisation des chapitres
          for (let i = 0; i < data.items.length; i++) {
            let title = data.items[i].link.split("/")[4].replace(/-/g, " ");
            let nb = data.items[i].link.split("/")[5];

            // Ajout d'un livre
            booksRelease[`${title}`][`${nb}`] = {
              chapter: data.items[i].title,
              link: data.items[i].link
            };
          }
          console.log(booksRelease);
          this.setState({ booksRelease: booksRelease });
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  /*

            <li key={key}>
              <a href={this.state.booksRelease[key].link} target="_blank">
                {this.state.booksRelease[key].title}
              </a>
            </li>
  */

  // RENDER
  render() {
    const books = Object.keys(this.state.booksRelease).map(key => (
      <li key={key}>
        <h4>{key.toUpperCase()}</h4>
        <ul>
          {Object.keys(this.state.booksRelease[key]).map(keyChapter => (
            <li className="chapter-release" key={keyChapter}>
              <a
                href={this.state.booksRelease[key][keyChapter].link}
                target="_blank"
              >
                {this.state.booksRelease[key][keyChapter].chapter}
              </a>
            </li>
          ))}
        </ul>
      </li>
    ));
    return (
      <div className="hotReleaseBox">
        <h3 className="release-title">
          <a href="https://www.japscan.cc/" target="_blank">
            Les sorties récentes
          </a>
        </h3>
        <ul className="release-list">{books}</ul>
      </div>
    );
  }

  // PROPTYPES
  static propTypes = {
    //add: PropTypes.func.isRequired
  };
}

export default HotRelease;
