import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../../data/products";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import Loader from "../Loader/Loader";

function ItemListContainer(props) {
  // Hook de estado para productos
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");

  // Hook para obtener parametros de url
  const categoryId = useParams().categoryId;

  // Promesa que resuelve productos
  const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products) {
        // Si estamos en una categoria filtramos
        if (categoryId) {
          let catProducts = products.filter(
            (item) => item.category === categoryId
          );
          //Revisamos si tenemos productos Filtrados y los resolvemos
          if (catProducts.length > 0) {
            resolve(catProducts);
          }
          //Si no tenemos productos puede ser que la categoria en la url esta mala o no hay productos
          else {
            reject("no hay productos en esta categoria o no existe categoria");
          }
        }
        // Si estamos en el home devolvemos todos los productos
        else {
          resolve(products);
        }
      } else {
        reject("hubo un error en la consulta de productos");
      }
    }, 2000);
  });
  // Ejecutar al "montar" el componente
  useEffect(() => {
    setProductos([]);
    // Promesa que resuelve los datos
    traerProductos
      .then((resolve) => {
        setProductos(resolve);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
    // eslint-disable-next-line
  }, [categoryId]);

  return (
    <section className="mt-4 mb-4">
      <div className="container">
        <div className="row">
          <h1 className="itemListContainer-title">
            {props.greeting}
            {categoryId && categoryId}
          </h1>
          {
            // Al iniciar componente (no tenemos productos y no hay error) mostramos un loader.
            // Al terminar la función asincrona (tenemos productos o error) mostramos el componente ItemList o el error

            productos.length === 0 && !error ? (
              <Loader />
            ) : error ? (
              <p className="alerta-error alert alert-danger">{error}</p>
            ) : (
              <ItemList items={productos} />
            )
          }
        </div>
      </div>
    </section>
  );
}

export default ItemListContainer;
