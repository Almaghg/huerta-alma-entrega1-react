
/* import './App.css'; */
import {useEffect, useState} from 'react';
import Navbar from './components/layout/NavBar';
import ListContainer from './components/containers/ItemListContainer';
import ItemContainer from './components/containers/ItemContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/containers/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <ListContainer greetings = "Menú" />
      <ItemContainer/>
      <ItemContainer/>
      <ItemContainer/>
      <ItemCount/>
    </div>
  );
}


export default App;
