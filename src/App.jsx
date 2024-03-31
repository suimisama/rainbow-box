import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './index.css';
import Box from './features/Box/NormalBox';
import Button from './ui/Button';
import { getRandomColor } from './utilities/helpers';
import AppLayout from './ui/AppLayout';
import { AlertProvider } from './context/AlertContext';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: '/',
  },
]);

function App() {
  return (
    <AlertProvider>
      <RouterProvider router={router}></RouterProvider>;
    </AlertProvider>
  );
}

export default App;
