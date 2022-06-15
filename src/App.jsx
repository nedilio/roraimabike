import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      {/* <ItemListContainer greeting="Bienvenidos a RoraimaBike" /> */}
      <ItemDetailsContainer />
    </div>
  );
}

export default App;
