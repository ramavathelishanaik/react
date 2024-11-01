import { useState } from "react";

const Tour = ({ id, name, info, price, image, handleNotInterested }) => {
  const [readmore, setReadmore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>

      <div className="tour-info">
        <h4>{name}</h4>
        <div>
          {readmore ? (
            <div>{info}</div>
          ) : (
            <div>{`${info.substring(0, 200)}...`}</div>
          )}
          <button
            className="text-blue-600"
            onClick={() => setReadmore((pre) => !pre)}
          >
            {readmore ? "Read less" : "Read more"}
          </button>
        </div>
        <button
          type="button"
          className="delete-btn btn-block btn"
          onClick={() => handleNotInterested(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
