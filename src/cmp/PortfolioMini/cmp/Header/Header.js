import React from "react";
import { DarkMode } from "./DarkMode";
import './Header.css';

const Header = ({ data, darkMode, switchDarkMode }) => {
  const { profile, social, info, buttons } = data;

  return (
    <header className="profile container">
      <DarkMode darkMode={darkMode} switchMode={switchDarkMode} />

      <div className="profile__container grid">
        <div className="profile__data">
          <div className="profile__border">
            <div className="profile__perfil">
              <img src={profile.img} alt="Foto de Perfil" />
            </div>
          </div>

          <h2 className="profile__name">{profile.name}</h2>
          <h3 className="profile__profession">{profile.profession}</h3>

          <ul className="profile__social">
            {social.map((item, key) => (
              <a
                href={item.href}
                target="_blank"
                className="profile__social-link"
                key={key}
              >
                <i className={item.iconClass} />
              </a>
            ))}
          </ul>
        </div>
        <div className="profile__info grid">
          {info.map((item, key) => (
            <div className="profile__info-group" key={key}>
              <h3 className="profile__info-number">{item.num}</h3>
              <p className="profile__info-description">
                {item.line1} <br /> {item.line2}
              </p>
            </div>
          ))}
        </div>

        <div className="profile__buttons">
          {buttons.big.map((item, key) => (
            <a
              download=""
              target="_blank"
              href={item.href}
              className="button"
              key={key}
            >
              {item.title}
              <i className={item.iconClass} />
            </a>
          ))}

          <div className="profile__buttons-small">
            {buttons.small.map((item, key) => (
              <a
                href={item.href}
                target="_blank"
                className="button button__small button__gray"
                key={key}
              >
                <i className={item.iconClass} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
