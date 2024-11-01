import Reviews from "./components/Reviews";
const App = () => {
  return (
    <main>
      <section>
        <div className="title">
          <h1>our revies</h1>
          <div className="title-underline"></div>
        </div>
        <Reviews />
      </section>
    </main>
  );
};
export default App;
