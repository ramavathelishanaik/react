
import { useSelector } from 'react-redux';
import CartItem from './cartItem'
const CartItemList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);

  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </div>
  );
};
export default CartItemList;
