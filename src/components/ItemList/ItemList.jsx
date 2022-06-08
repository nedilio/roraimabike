import { useEffect, useState } from "react";
import { data } from "../../data/products";
import Item from "../Item/Item";

function ItemList() {
  const [productos, setProductos] = useState([]);

  function APIcall() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("Error en la llamada a la API");
        }
      }, 5000);
    });
  }

  async function main() {
    try {
      let resAPI = await APIcall();
      console.log(resAPI);
      setProductos(resAPI);
    } catch (error) {
      console.error(`Error Promise: ${error}`);
    }
  }
  useEffect(() => {
    console.log("component mount");
    main();
    // eslint-disable-next-line
  }, []);

  return (
  <div className="row">
      {(productos.length === 0)?'Cargando productos...':(
          productos.map((producto)=> 
              <Item producto={producto} key={producto.id}/>
          )
      )}
  </div>
    );
}

export default ItemList;
