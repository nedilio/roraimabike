import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem, updateProduct } from "../../services/firestore";

const Producto = () => {
  const id = useParams().id;
  const [producto, setProducto] = useState({});
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    getSingleItem(id)
      .then((resolve) => {
        setProducto(resolve);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleOnChange = (e) => {
    const input = e.target["name"];
    let value = e.target.value;
    if (input === "price" || input === "stock") {
      value = parseInt(value);
    }
    setProducto({ ...producto, [input]: value });
  };

  const onUpdate = (event) => {
    event.preventDefault();
    updateProduct(id, producto);
    setUpdated(true);
  };

  return (
    <div className="container mx-auto pt-4">
      <form action="">
        <div className="field">
          <label htmlFor="title">Nombre</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="title"
            value={producto.title}
          />
        </div>
        <div className="field">
          <label htmlFor="description">Descripcion</label>
          <textarea
            onChange={handleOnChange}
            type="text"
            name="description"
            value={producto.description}
          />
        </div>
        <div className="field">
          <label htmlFor="price">Precio</label>
          <input
            onChange={handleOnChange}
            type="number"
            name="price"
            value={producto.price}
          />
        </div>
        <div className="field">
          <label htmlFor="stock">Stock</label>
          <input
            onChange={handleOnChange}
            type="number"
            name="stock"
            value={producto.stock}
          />
        </div>
        <button onClick={onUpdate}>Update</button>
      </form>
      {updated && (
        <div class="text-center py-4 lg:px-4 w-1/2">
          <div
            class="p-2 bg-green-800 items-center text-green-100 leading-none rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span class="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">
              Exito
            </span>
            <span class="font-semibold mr-2 text-left flex-auto">
              Producto Actualizado
            </span>
            <svg
              class="fill-current h-6 w-6 text-green-100"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => setUpdated(false)}
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Producto;
