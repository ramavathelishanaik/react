import React from "react";
import { Link } from "react-router-dom";
export default function Cocktail({ id, name, image, glass, isAlcoholic }) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h6>{isAlcoholic}</h6>
        <p>{glass}</p>

        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
}
