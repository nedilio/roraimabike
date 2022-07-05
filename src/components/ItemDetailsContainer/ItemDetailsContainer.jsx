import { getSingleItem } from "../../services/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../ItemDetails/ItemDetails";
import Loader from "../Loader/Loader";

function ItemDetailsContainer(props) {
  // Hook de estado para producto individual
  const [producto, setProducto] = useState({});
  const [error, setError] = useState("");

  //   Generamos un index random a partir de el numero de items en el array
  const id = useParams().id;
  // Ejecutar al "montar" el componente
  useEffect(() => {
    // Promesa que resuelve los datos
    getSingleItem(id)
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
