import data from "./data";
import Category from "./components/Category";
import Menu from "./components/Menu";
import { useState } from "react";

const App = () => {
  const [allmenuitems, setAllmenuitems] = useState(data);

  const category = data.map((eachItem) => {
    return eachItem.category;
  });

  const allcategories = [
    "all",
    ...category.filter((value, index, self) => self.indexOf(value) === index),
  ];

  const filterCategory = (item) => {
    if (item === "all") {
      setAllmenuitems(data);
    } else {
      setAllmenuitems(data.filter((each) => each.category === item));
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="title-underline"></div>
        </div>
        <Category
          allcategories={allcategories}
          filterCategory={filterCategory}
        />
        <Menu allmenuitems={allmenuitems} />
      </section>
    </main>
  );
};
export default App;
