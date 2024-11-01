import Tour from "./Tour";
const Tours = ({ tours, handleNotInterested, fetchTours }) => {
  return (
    <section>
      <div>
        <h2 className="title">Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      {tours.length === 0 && (
        <main>
          <div className="title">
            <h1 className="title">No Tours Found</h1>
            <button
              type="button"
              className="btn mt-6"
              onClick={() => fetchTours()}
            >
              Refresh
            </button>
          </div>
        </main>
      )}

      <div className="tours">
        {tours.map((tour) => {
          return (
            <Tour
              {...tour}
              key={tour.id}
              handleNotInterested={handleNotInterested}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
