import { useEffect, useState } from "react";
import { products } from "../../data/products";
import { useParams } from "react-router-dom";
import ItemDetails from "../ItemDetails/ItemDetails";
import Loader from "../Loader/Loader";

function ItemDetailsContainer(props) {
  // Hook de estado para producto individual
  const [producto, setProducto] = useState({});
  const [error, setError] = useState("");

  //   Generamos un index random a partir de el numero de items en el array

  const id = useParams().id;

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products) {
        const productoEncontrado = products.find((item) => item.id === id);
        if (productoEncontrado) {
          resolve(productoEncontrado);
        } else {
          reject("producto no Encontrado, revisar id en url");
        }
      } else {
        reject("no hay productos para buscar");
      }
    }, 2000);
  });
  // Ejecutar al "montar" el componente
  useEffect(() => {
    // Promesa que resuelve los datos
    getItem
      .then((resolve) => {
        setProducto(resolve);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
    // eslint-disable-next-line
  }, [id]);

  return (
    <section className="container mx-auto px-2">
      <h2 className="text-center my-4">Detalle de Producto</h2>
      {!producto.title && !error ? (
        <Loader />
      ) : error ? (
        <p className="">{error}</p>
      ) : (
        <ItemDetails item={producto} />
      )}
    </section>
  );
}

export default ItemDetailsContainer;
