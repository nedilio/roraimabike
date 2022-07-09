import { getSingleItem } from "../../services/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../ItemDetails/ItemDetails";
import Loader from "../Loader/Loader";

function ItemDetailsContainer(props) {
  const [producto, setProducto] = useState({});
  const [error, setError] = useState("");

  const id = useParams().id;

  useEffect(() => {
    getSingleItem(id)
      .then((resolve) => {
        setProducto(resolve);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
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
