import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../../data/products";
import { useParams } from "react-router-dom";
import { ArrowClockwise } from "react-bootstrap-icons";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  // Hook de estado para productos
  const [productos, setProductos] = useState([]);

  // Hook para obtener parametros de url
  const categoryId = useParams().categoryId;

  // Promesa que resuelve productos
  const traerProductos = new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (products) {
        // Si estamos en una categoria filtramos
        if (categoryId) {
          let catProducts = products.filter( (item) => item.category === categoryId);
          resolve(catProducts);
        } 
        // Si estamos en el home devolvemos todos los productos
        else {
          resolve(products);
        }
      } else {
        reject('hubo un error');
      }
    }, 500);
  });
  // Ejecutar al "montar" el componente
  useEffect(() => {
    // Promesa que resuelve los datos

    traerProductos
    .then((resolve) => {
      setProductos(resolve);
    })
    .catch((error) => {
      console.log(error)
    });
    // eslint-disable-next-line
  }, [categoryId]);

  return (
    <section className="mt-4 mb-4">
      <div className="container-fluid">
        <div className="row">
          <h1 className="itemListContainer-title">{props.greeting}{categoryId && categoryId}</h1>
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
