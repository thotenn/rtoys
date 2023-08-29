/**
 * Requires font awesome css inside index.html
 */

import React from "react";
import "./assets/PortfolioMini.css";

export const PortfolioMiniOriginal = () => {
  return (
    <div className="portfoliomini-main dark-theme">  {/* Quitar el dark-theme para el tema claro */}
    {/* <div className="portfoliomini-main"> */}
      <header className="profile container">
        {/* Theme button */}
        <i className="fa-regular fa-moon change-theme" id="theme-button" />
        {/* Si es tema oscuro, reemplazar la clase i por "fa-regular fa-sun change-theme */}

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

      <main className="main">
        <section className="filters container">
          {/* FILTERS TABS */}

          <ul className="filters__content">
            <button className="filters__button filter-tab-active" data-target="#projects">
              Projects
            </button>
            <button className="filters__button" data-target="#skills">
              Skills
            </button>
          </ul>

          <div className="filters__sections">
            {/* PROJECTS */}
            <div className="projects__content grid filters__active" data-content id="projects">
              <article className="projects__card">
                <img src="https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className="proyects__img" />

                <div className="projects__modal">
                  <div>
                    <span className="projects__subtitle">Web</span>
                    <h3 className="projects__title">Payment Site</h3>
                    <a href="#" className="projects__button button button__small">
                      <i className="fa-solid fa-link" />
                    </a>
                  </div>
                </div>
              </article>

              <article className="projects__card">
                <img src="https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className="proyects__img" />

                <div className="projects__modal">
                  <div>
                    <span className="projects__subtitle">Web</span>
                    <h3 className="projects__title">Portfolio website</h3>
                    <a href="#" className="projects__button button button__small">
                      <i className="fa-solid fa-link" />
                    </a>
                  </div>
                </div>
              </article>

              <article className="projects__card">
                <img src="https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className="proyects__img" />

                <div className="projects__modal">
                  <div>
                    <span className="projects__subtitle">Movil</span>
                    <h3 className="projects__title">Fast food app</h3>
                    <a href="#" className="projects__button button button__small">
                      <i className="fa-solid fa-link" />
                    </a>
                  </div>
                </div>
              </article>

              <article className="projects__card">
                <img src="https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className="proyects__img" />

                <div className="projects__modal">
                  <div>
                    <span className="projects__subtitle">Design</span>
                    <h3 className="projects__title">Music app design</h3>
                    <a href="#" className="projects__button button button__small">
                      <i className="fa-solid fa-link" />
                    </a>
                  </div>
                </div>
              </article>

            </div>
            {/* SKILLS */}
            <div className="skills__content grid" data-content id="skills">
              
              <div className="skills__area">
                <h3 className="skills__title">
                  Frontend developer
                </h3>

                <div className="skills__box">


                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="fa-regular fa-circle-check" />

                      <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Basic</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="fa-regular fa-circle-check" />

                      <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="fa-regular fa-circle-check" />

                      <div>
                        <h3 className="skills__name">Javascript</h3>
                        <span className="skills__level">Senior</span>
                      </div>
                    </div>

                  </div>


                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="fa-regular fa-circle-check" />

                      <div>
                        <h3 className="skills__name">ReactJS</h3>
                        <span className="skills__level">Senior</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="fa-regular fa-circle-check" />

                      <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="fa-regular fa-circle-check" />

                      <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Basic</span>
                      </div>
                    </div>
                    
                  </div>

                </div>
              </div>


              <div className="skills__area">
                <h3 className="skills__title">
                  Backend developer
                </h3>

                <div className="skills__box">
                  
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="fa-regular fa-circle-check" />

                      <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="fa-regular fa-circle-check" />

                      <div>
                        <h3 className="skills__name">Postgresql</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="fa-regular fa-circle-check" />

                      <div>
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Basic</span>
                      </div>
                    </div>

                  </div>


                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="fa-regular fa-circle-check" />

                      <div>
                        <h3 className="skills__name">NodeJS</h3>
                        <span className="skills__level">Senior</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="fa-regular fa-circle-check" />

                      <div>
                        <h3 className="skills__name">Django</h3>
                        <span className="skills__level">Senior</span>
                      </div>
                    </div>
                    
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span className="footer__copy">
          &copy; Puntero Logico. All rigths reserver.
        </span>
      </footer>
    </div>
  );
};
