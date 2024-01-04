import React from 'react';
import ReactDOM from 'react-dom/client';
import Player from './Pages/Player';
import MainMenu from './Pages/MainMenu';
import AboutUs from './Pages/AboutUs';
import Instructions from './Pages/Instructions';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu/>,
  },
  {
    path: "/game",
    element: <Player/>,
  },
  {
    path: "/aboutUs",
    element: <AboutUs/>,
  },
  {
    path: "/instructions",
    element: <Instructions/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

