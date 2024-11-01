import { useState, createContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import CartItem from "./CartItem";

const url = "https://www.course-api.com/react-useReducer-cart-project";

export const GlobalContext = createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const reducer = (state, action) => {
  if (action.type === "CLEAR_ITEMS") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "REMOVE_SINGLE_ITEM") {
    const filteredCart = state.cart.filter(
      (cart) => cart.id !== action.payload.id
    );
    return {
      ...state,
      cart: filteredCart,
    };
  }

  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((CartItem) => {
      if (CartItem.id === action.payload.id) {
        return {
          ...CartItem,
          amount: CartItem.amount + 1,
        };
      }
      return CartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((CartItem) => {
        if (CartItem.id === action.payload.id) {
          return {
            ...CartItem,
            amount: CartItem.amount - 1,
          };
        }
        return CartItem;
      })
      .filter((CartItem) => CartItem.amount !== 0);
    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (accumulator, currentValue) => {
        const { price, amount } = currentValue;
        let totalamount = price * amount; //total amount for single product (no.of.quantities * price)
        accumulator.total += totalamount;
        accumulator.amount += amount;
        return accumulator;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return {
      ...state,
      total: total,
      amount: amount,
    };
  }

  if (action.type === "LOADING") {
    return {
      ...state, 
      loading: true,
    };
  }

  if (action.type === "DISPLAY_DATA") {
    return {
      ...state,
      cart: action.payload.cart,
      loading: false,
    };
  }

  // return state;
  throw new Error("no action is not matched");
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_DATA", payload: { cart: cart } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
