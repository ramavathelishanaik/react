import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";

export const GlobalContext = createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios(`${url}${searchTerm}`);
      const totaldata = await response.data;
      const { drinks } = totaldata;

      if (drinks) {
        const newdrinks = drinks?.map((eachdrink) => {
          const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass } =
            eachdrink;

          return {
            id: idDrink,
            name: strDrink,
            isAlcoholic: strAlcoholic,
            image: strDrinkThumb,
            glass: strGlass,
          };
        });
        setCocktails(newdrinks);
        setLoading(false);
      } else {
        setCocktails([]);
        setLoading(false);
      }
    } catch (error) {
      // console.log(error.response);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);

  return (
    <GlobalContext.Provider
      value={{ loading, setLoading, searchTerm, setSearchTerm, cocktails }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
