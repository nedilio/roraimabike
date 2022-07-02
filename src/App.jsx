import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";
// import {getItems} from "./services/firestore";
import "./App.scss";

function App() {
  // getItems().then(
  //   res=> console.log(res)
  // )
  return (
    <div className="font-mono bg-slate-50">
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a RoraimaBike" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos en Categoria: "/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/item/:id" element={<ItemDetailsContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
