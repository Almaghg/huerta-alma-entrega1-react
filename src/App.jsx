
/* import './App.css'; */
import Navbar from './components/NavBar';
import ListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <ListContainer greetings = "Hola!!!" />
    </div>
  );
}


export default App;
