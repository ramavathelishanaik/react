import Values from "values.js";
import { useState } from "react";
import SingleColor from "./SingleColor";
const App = () => {
  const [color, setColor] = useState("");
  const [errorState, setErrorState] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(20));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colorData = new Values(color).all(10);
      // console.log(colorData);
      setList(colorData);
    } catch (error) {
      setErrorState(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${errorState ? "error" : null}`}
          />
          <button className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((eachcolor, index) => {
          return (
            <SingleColor
              key={index}
              index={index}
              {...eachcolor}
              hexColor={eachcolor.hex}
            />
          );
        })}
      </section>
    </>
  );
};
export default App;
