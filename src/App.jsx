
/* import './App.css'; */
import {useEffect, useState} from 'react';
import Navbar from './components/layout/NavBar';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import ItemListContainer from './components/containers/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/tipo/:tipoId' element={<ItemDetailContainer/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
