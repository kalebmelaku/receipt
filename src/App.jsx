import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Order from './pages/purchaseOrder';
import Request from './pages/purchaseRequest';
import Home from './pages/home';
function App()
{
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/request' element={<Request/>} />
        </Routes>
    </>
  );
}

export default App;