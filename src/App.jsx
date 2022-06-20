import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a RoraimaBike" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos en Categoria: "/>} />
          <Route path="/item/:id" element={<ItemDetailsContainer />} />
          
          {/* <ItemDetailsContainer /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
