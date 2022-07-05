import { getProductos, getProductosByCat } from "../../services/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

function ItemListContainer(props) {
  // Hook de estado para productos
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");

  // Hook para obtener parametros de url
  const categoryId = useParams().categoryId;

  // Ejecutar al "montar" el componente
  useEffect(() => {
    setProductos([]);
    if (!categoryId) {
      getProductos()
        .then((res) => {
          setProductos(res);
          setError("");
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });
    } else {
      getProductosByCat(categoryId)
        .then((res) => {
          setProductos(res);
          setError("");
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });
    }
  }, [categoryId]);

  return (
    <section className="contacontainer mx-auto px-2 my-8">
      <h1 className="text-center text-2xl my-4">
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
    </section>
  );
}

export default ItemListContainer;
