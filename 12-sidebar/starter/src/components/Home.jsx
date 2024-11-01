import { FaBars } from "react-icons/fa";
import useGlobalContext from "../useGlobalContext";
const Home = () => {
  const { setSidebar, setModal } = useGlobalContext();

  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => setSidebar((sidebar) => !sidebar)}
      >
        <FaBars />
      </button>
      <button className="btn" onClick={() => setModal((modal) => !modal)}>
        show model
      </button>
    </main>
  );
};
export default Home;
