import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import User from './Pages/User';
import Create from './Pages/Create';
import Edit from './Pages/Edit';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App = () => {

  const[id, setId] = useState(0)

  return (
    <div>
      
      <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<User setId={setId}/>} />
        <Route path='/edit/:id' element={<Edit id={id}/>} />
        <Route path='/create' element={<Create />} />
      </Routes>
      <div>
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;