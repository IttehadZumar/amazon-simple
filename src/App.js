import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Main from './layouts/Main';
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory';
import { load } from './loadData/load';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './route/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/shop',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/order',
          /* loader: () => {
            return fetch('produts.json')
          }, */
          loader: load,
          element: <Orders></Orders>
        },
        {
          path: 'shipping',
          element: <PrivateRoute>
            <Shipping></Shipping>
          </PrivateRoute>
        },
        {
          path: 'inventory',
          element: <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },

  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
