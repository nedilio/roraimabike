import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Order from "./components/Order/Order";
import "./App.scss";

function App() {
  return (
    <div className="font-sans bg-slate-100">
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Bienvenidos a RoraimaBike" />
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer greeting="Productos en Categoria: " />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailsContainer />} />
            <Route path="/order/:id" element={<Order />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
