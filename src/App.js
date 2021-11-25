import './App.css';
import NavBar from './compoments/navbar/NavBar';
import ItemListcontainer from './compoments/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListcontainer input={"Soy un ItemListContainer"}/>
    </div>
  );
}

export default App;
