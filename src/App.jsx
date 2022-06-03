import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <header>
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a RoraimaBike"/>
      </header>
    </div>
  );
}

export default App;
