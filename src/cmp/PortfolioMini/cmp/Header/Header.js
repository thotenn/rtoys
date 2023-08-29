import React from 'react'
import { DarkMode } from '../MiniComponents/DarkMode';
import { useApp } from '../../providers';

const Header = ({ }) => {
    const { state, actionList, dispatch } = useApp();
    const data = state.sections.header;

    const switchDarkMode = () => dispatch({ type: actionList.DARK_MODE });

  return (
    <header className="profile container">
        <DarkMode darkMode={state.theme.dark_mode} switchMode={switchDarkMode} />
        

        <div className="profile__container grid">
          <div className="profile__data">
            <div className="profile__border">
              <div className="profile__perfil">
                <img src="img/profiles/profile1.jpg" alt="Foto de Perfil" />
              </div>
            </div>

            <h2 className="profile__name">Jose Garay</h2>
            <h3 className="profile__profession">web developer</h3>

            <ul className="profile__social">
              <a href="#" target="_blank" className="profile__social-link">
                <i className="fab fa-facebook" />
              </a>
              <a href="#" target="_blank" className="profile__social-link">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" target="_blank" className="profile__social-link">
                <i className="fab fa-github" />
              </a>
            </ul>
          </div>
          <div className="profile__info grid">
            <div className="profile__info-group">
              <h3 className="profile__info-number">
                7
              </h3>
              <p className="profile__info-description">
                Years of <br /> work
              </p>
            </div>
            <div className="profile__info-group">
              <h3 className="profile__info-number">
                +124
              </h3>
              <p className="profile__info-description">
                Completed <br /> projects
              </p>
            </div>
            <div className="profile__info-group">
              <h3 className="profile__info-number">
                96
              </h3>
              <p className="profile__info-description">
                Satisfied <br /> customers
              </p>
            </div>
          </div>

          <div className="profile__buttons">
            <a download="" href="img/profiles/profile1.jpg" className="button">
              Download CV <i className="fa-solid fa-download" />
            </a>

            <div className="profile__buttons-small">
              <a href="https://api.whatsapp.com/send?phone=595971163986&text=Hola" target="_blank" className="button button__small button__gray">
                <i className="fa-brands fa-whatsapp" />
              </a>
              <a href="#" target="_blank" className="button button__small button__gray">
                <i className="fa-brands fa-facebook-messenger" />
              </a>
            </div>
          </div>

        </div>
    </header>
  )
}

export default Header;