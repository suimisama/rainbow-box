import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './index.css';
import Box from './ui/Box';
import Button from './ui/Button';
import { getRandomColor } from './utilities/helpers';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: '/',
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
