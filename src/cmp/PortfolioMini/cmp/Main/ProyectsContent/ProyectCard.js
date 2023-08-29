import React from "react";

export const ProyectCard = ({ data }) => {
  return (
    <article className="projects__card">
      <img
        src={data?.img}
        alt=""
        className="proyects__img"
      />

      <div className="projects__modal">
        <div>
          <span className="projects__subtitle">{data?.subtitle}</span>
          <h3 className="projects__title">{data?.title}</h3>
          {data.link !== '' &&
          <a href={data?.link} className="projects__button button button__small">
            <i className="fa-solid fa-link" />
          </a>}
        </div>
      </div>
    </article>
  );
};
