import data from "./data";
import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    } else if (amount > data.length) {
      amount = 9;
    } else if (count > 0 && count < data.length) {
      amount = count;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3 className="title">tired of boring lorem ipsum</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">paragraph:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((eachpara, index) => {
          return <p key={index}>{eachpara}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
