import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

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
