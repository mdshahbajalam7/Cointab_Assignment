import React, { useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { UserDetails } from './components/UserDetails';

function App() {
  const [data, setData] = useState([])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home data={data} setData={setData}/>}></Route>
        <Route path='/user-details' element={<UserDetails data={data} setData={setData}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
