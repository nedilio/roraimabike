import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductos } from "../../services/firestore";

const AdminProducts = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(productos);
  return (
    <div>
      <h2>Productos</h2>
      {productos.map((prod) => (
        <div>
          <Link to={`producto/${prod.id}`}>{prod.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default AdminProducts;
