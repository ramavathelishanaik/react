import data from "./data";
import AccordianList from "./components/AccordianList";

const App = () => {
  return (
    <main>
      <section className="info">
        <div className="" style={{ marginBottom: "40px" }}>
          <h1 className="title">Question and Answers abouut login</h1>
          <div className="title-underline"></div>
        </div>
        <AccordianList data={data} />
      </section>
    </main>
  );
};
export default App;
