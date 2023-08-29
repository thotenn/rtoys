import React from 'react';
import './Footer.css';

export const Footer = ({ txt = "" }) => {
  return (
    <footer className="footer container">
        <span className="footer__copy">
          {/* {decodeURIComponent(txt)} */}
          {/* <div dangerouslySetInnerHTML={{ __html: txt }} /> */}
          {txt}
        </span>
      </footer>
  )
}
