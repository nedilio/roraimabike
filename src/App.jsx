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
          <header className="fixed w-full top-0 left-0 bg-slate-100 z-20">
            <NavBar />
          </header>
          <div className="mt-20 md:mt-16">
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
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
