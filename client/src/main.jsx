import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import App from './App.jsx';
import Profile from './pages/Profile.jsx';
import Home from './pages/Home';
import NotFound from './components/NotFound.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Shop from './pages/Shop.jsx';
import Success from './pages/Success.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/success',
        element: <Success/>
      },
      // {
      //   path: '/products/:id',
      //   element: <Detail />
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

