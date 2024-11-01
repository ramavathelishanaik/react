import CartItem from "./CartItem";
// import cartItems from "./data";
import useGlobalContext from "./useGlobalContext";
const CartContainer = () => {
  const { state, dispatch } = useGlobalContext();
  const cartArray = [...state.cart];

  if (state.loading) {
    return <div className="loading"></div>;
  }

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${state.total}</span>
          </h5>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => dispatch({ type: "CLEAR_ITEMS" })}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
