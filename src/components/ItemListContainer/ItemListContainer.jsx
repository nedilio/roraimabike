import { getProductos, getProductosByCat } from "../../services/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");

  const categoryId = useParams().categoryId;

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
      {productos.length === 0 && !error ? (
        <Loader />
      ) : error ? (
        <p className="alerta-error alert alert-danger">{error}</p>
      ) : (
        <ItemList items={productos} />
      )}
    </section>
  );
}

export default ItemListContainer;
