import "./App.css";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cocktail/:cocktailId" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
