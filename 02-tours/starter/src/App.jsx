const url = "https://www.course-api.com/react-tours-project";
import Loading from "./componetns/Loading";
import Tours from "./componetns/Tours";
import ErrorCom from "./componetns/ErrorCom";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("something went wrong....");
      }
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error.message);
    }
  };

  const handleNotInterested = (id) => {
    setTours((tours) => tours.filter((tour) => tour.id !== id));
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorCom />;
  }

  // if (tours.length === 0) {
  //   return (
  //     <main>
  //       <div className="title">
  //         <h1 className="title">No Tours Found</h1>
  //         <button
  //           type="button"
  //           className="btn mt-6"
  //           onClick={() => fetchTours()}
  //         >
  //           Refresh
  //         </button>
  //       </div>
  //     </main>
  //   );
  // }

  return (
    <main>
      <Tours
        tours={tours}
        handleNotInterested={handleNotInterested}
        fetchTours={fetchTours}
      />
    </main>
  );
};
export default App;
