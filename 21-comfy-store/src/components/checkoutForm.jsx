import { Form, redirect } from 'react-router-dom';
import SubmitButton from './submitButton';
import { customFetch, formatPrice } from '../utils';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';
import FormInput from './formInput';

export const action =(store) =>async ({ request }) => {

    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await customFetch.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast.success('order placed successfully');
      return redirect('/orders');
    } catch (error) {
        const errorMessage =
          error?.response?.data?.error?.message ||
          'there was an error placing your order';
        toast.error(errorMessage);
        if (error?.response?.status === 401 || error?.response?.status === 403) return redirect('/login');

      
        return null;
    }

   
  };


const CheckoutForm = () => {
    return (
        <Form method='POST' className='flex flex-col gap-y-4'>
          <h4 className='font-medium text-xl'>Shipping Information</h4>
          <FormInput label='first name' name='name' type='text' />
          <FormInput label='address' name='address' type='text' />
          <div className='mt-4'>
            <SubmitButton text='Place Your Order' />
          </div>
        </Form>
      );
}

export default CheckoutForm
