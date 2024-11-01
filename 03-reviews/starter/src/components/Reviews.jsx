import reviews from "../data";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { PiQuotesBold } from "react-icons/pi";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  //   const [singleReview, setSingleReview] = useState(reviews[index]);

  //   useEffect(() => {
  //     setSingleReview(reviews[index]);
  //   }, [index]);

  const checkrange = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    } else if (number < 0) {
      return reviews.length - 1;
    } else {
      return number;
    }
  };

  const nextperson = () => {
    setIndex((current) => {
      let newstate = current + 1;
      return checkrange(newstate);
    });
  };

  const prevperson = () => {
    setIndex((current) => {
      let newstate = current - 1;
      return checkrange(newstate);
    });
  };

  const randomnumber = () => {
    let random = Math.floor(Math.random() * reviews.length);
    if (random === index) {
      return random + 1;
    }
    setIndex(checkrange(random));
  };

  const { image, name, job, text } = reviews[index];

  return (
    <article className="review mt-4">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <PiQuotesBold />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button
          className="prev-btn"
          //   onClick={() => {
          //     if (index === 0) {
          //       setIndex(reviews.length - 1);
          //     } else setIndex((pre) => pre - 1);
          //   }}
          onClick={() => prevperson()}
        >
          <AiOutlineLeft />
        </button>
        <button
          className="next-btn"
          //   onClick={() => {
          //     if (index < reviews.length - 1) {
          //       setIndex((pre) => pre + 1);
          //     } else {
          //       setIndex(0);
          //     }
          //   }}
          onClick={() => nextperson()}
        >
          <AiOutlineRight />
        </button>
      </div>
      <div>
        <button
          className="random-btn mt-4"
          //   onClick={() => {
          //     let random = Math.floor(Math.random() * 4);

          //     setIndex(random);
          //   }}
          onClickCapture={() => randomnumber()}
        >
          suprise me
        </button>
      </div>
    </article>
  );
};
export default Reviews;
