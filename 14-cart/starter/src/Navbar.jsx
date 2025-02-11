import { FaCartPlus } from "react-icons/fa";
import useGlobalContext from "./useGlobalContext";
const Navbar = () => {
  const { state } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{state.amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
