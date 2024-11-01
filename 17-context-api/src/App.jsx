import "./App.css";
import useGlobalContext from "./useGlobalContext.js";

function App() {
  const { name } = useGlobalContext();
  return (
    <div>
      <h3>Hello world,{name}</h3>
    </div>
  );
}

export default App;
