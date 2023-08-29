import React from "react";
import "./Footer.css";

const Footer = ({ txt = "" }) => {
  return (
    <footer className="footer container">
      <span className="footer__copy">
        {/* {decodeURIComponent(txt)} */}
        {/* <div dangerouslySetInnerHTML={{ __html: txt }} /> */}
        {txt}
      </span>
    </footer>
  );
};

export default Footer;
