import { About,Error,HomeLayout,Landing,Products,SingleProduct,Cart,Checkout,Orders,Login,Register} from './pages/index'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

//errorelement
import {ErrorElement} from './components/index';

//loader
import {loader as landingLoader} from './pages/Landing'
import {loader as singleProductLoader} from './pages/SingleProduct'
import {loader as productsLoader} from './pages/Products'
import {loader as checkoutLoader} from './pages/Checkout'
import {loader as orderLoader} from './pages/Orders'

//actions
import {action as registerActon} from './pages/Register'
import { action as loginAction } from './pages/Login';
import { action as checkoutAction } from './components/checkoutForm';

//store
import { store } from './store';


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children:[
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement/>,
          loader: landingLoader
        },
        {
          path: 'products',
          element: <Products />,
          errorElement: <ErrorElement/>,
          loader: productsLoader

          
        },
        {
          path: 'products/:productsId',
          element: <SingleProduct />,
          errorElement: <ErrorElement/>,
          loader: singleProductLoader
        },
        {
          path: 'cart',
          element: <Cart />,
          errorElement: <ErrorElement/>,
        },
        {
          path: 'checkout',
          element: <Checkout/>,
          errorElement: <ErrorElement/>,
          loader: checkoutLoader(store),
          action: checkoutAction(store)
        },
        {
          path: 'about',
          element: <About />,
          errorElement: <ErrorElement/>,
        },
        {
          path: 'orders',
          element:<Orders />,
          errorElement: <ErrorElement/>,
          loader: orderLoader(store)

        }
      ]

    },
    {
      path: 'login',
      element: <Login/>,
      errorElement: <Error />,
      action: loginAction(store)
    },
    {
      path: 'register',
      element: <Register/>,
      errorElement: <Error />,
      action: registerActon
    }

  ])

  return (
    <RouterProvider router={router}/>
  )
}