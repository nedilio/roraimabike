import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../../data/products";
import "./ItemListContainer.css";
import { ArrowClockwise } from "react-bootstrap-icons";


function ItemListContainer(props) {
  // Hook de estado para productos
  const [productos, setProductos] = useState([]);

  const traerProductos = new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (products) {
        resolve(products)
      } else {
        reject('hubo un error');
      }
    }, 2000);
  });
  // Ejecutar al "montar" el componente
  useEffect(() => {
    // Promesa que resuelve los datos

    traerProductos
    .then((resolve) => {
      setProductos(resolve);
      console.log(resolve);
    })
    .catch((error) => {
      console.log(error)
    });
    // eslint-disable-next-line
  }, []);
  console.log(traerProductos);

  return (
    <section className="mt-4 mb-4">
      <div className="container-fluid">
        <div className="row">
          <h1 className="itemListContainer-title">{props.greeting}</h1>
          {
            // Al iniciar componente (no tenemos productos) mostramos un loader.
            // Al terminar la función asincrona (tenemos productos) mostramos el componente ItemList
            (productos.length===0) ? <div className="loader"><ArrowClockwise className="image_rotate" size={80}/></div> : <ItemList items={productos} />
          }
        </div>
      </div>
    </section>
  );
}

export default ItemListContainer;
