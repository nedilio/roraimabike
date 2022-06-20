import { useEffect, useState } from "react";
import { products } from "../../data/products";
import ItemDetails from "../ItemDetails/ItemDetails";
import {useParams} from 'react-router-dom';

function ItemDetailsContainer(props) {
  // Hook de estado para producto individual
  const [producto, setProducto] = useState({});

//   Generamos un index random a partir de el numero de items en el array

    const id = (useParams().id);

  const getItem = new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (products) {
        const productoEncontrado = products.find((item) => item.id === id);
        if (productoEncontrado) {
          resolve(productoEncontrado);
        } else {
          reject("producto no productoEncontrado, revisar id");
        }
      } else {
        reject('no hay productos para buscar');
      }
    }, 2000);
  });
  // Ejecutar al "montar" el componente
  useEffect(() => {
    // Promesa que resuelve los datos
    getItem
    .then((resolve) => {
      setProducto(resolve);
    })
    .catch((error) => {
      console.log(error);
    });
    // eslint-disable-next-line
  }, [id]);

  return (
    <section className="mt-4 mb-4 container">
        <h2>Detalle de Producto</h2>
        {(!producto.title) ? <div className="loader">Loading...</div> : <ItemDetails item={producto}/>}
        
        
    </section>
  );
}

export default ItemDetailsContainer;
