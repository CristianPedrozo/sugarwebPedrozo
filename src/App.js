import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListcontainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListcontainer input={"Soy un ItemListContainer"}/>
    </div>
  );
}

export default App;
