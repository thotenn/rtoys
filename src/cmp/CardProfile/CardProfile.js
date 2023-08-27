// Requres font awesome

import React from "react";
import "./CardProfile.css";
// import ImgProfile1 from './img/profile1.jpg';

export const CardProfile = () => {
  return (
    <div id="rtoys-cardProfile">
      <div className="container">
        <div className="content">
          <div className="card">
            <div className="card-content">
              <div className="image">
                <img src="img/profiles/profile1.jpg" alt="a" />
              </div>

              <div className="media-icons">
                <i className="fab fa-facebook" />
                <i className="fab fa-twitter" />
                <i className="fab fa-github" />
              </div>

              <div className="name-profession">
                <span className="name">Someone Name</span>
                <span className="profession">Web Developer</span>
              </div>

              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fa fa-star" />
                <i className="far fa-star" />
              </div>

              <div className="button">
                <button className="aboutMe">Sobre Mi</button>
                <button className="hireMe">Contrátame</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
