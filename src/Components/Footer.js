// REACT
import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faIcon from "@fortawesome/fontawesome-free-solid";
// CSS
import "./Footer.css";

const Footer = ({ makeActions, viewList }) => (
  <footer>
    <div className="iconFooter" onClick={() => makeActions("showAdd")}>
      <FontAwesomeIcon icon={faIcon.faPlus} />
    </div>
    <div className="divider" />
    <div className="iconFooter" onClick={() => makeActions("changeView")}>
      <FontAwesomeIcon icon={viewList ? faIcon.faThList : faIcon.faTh} />
    </div>
    <div className="divider" />
    <div className="iconFooter" onClick={() => makeActions("logOut")}>
      <FontAwesomeIcon icon={faIcon.faSignOutAlt} />
    </div>
  </footer>
);

export default Footer;
