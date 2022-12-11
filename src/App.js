import './App.css';
import React from 'react';
import { router } from './Routes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
