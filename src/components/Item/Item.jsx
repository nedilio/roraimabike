import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Item({ item }) {
  const url = `/item/${item.id}`;
  return (
    <div className="w-11/12 mx-auto mb-6 rounded sm:w-80 md:w-96 sm:justify-around">
      <div className="text-center shadow-md">
        <div className="p-3 relative">
          <Link to={url}>
            <img
              src={item.pictureUrl}
              className="w-full h-auto rounded transition ease-in-out delay-150 hover:scale-105"
              alt={item.title}
            />
          </Link>
        </div>
        <div className="md:flex-auto pl-6">
          <div className="relative flex flex-wrap items-baseline pb-6 pt-4 text-left before:bg-slate-800 before:absolute before:top-0 before:bottom-0 before:-left-6  before:-right-0">
            <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
              {item.title}
            </h1>
            <div className="relative text-lg text-white">${item.price}</div>
            <div className="relative uppercase text-orange-500 ml-3">
              {item.stock > 0 ? `En Stock: ${item.stock}` : "Sin Stock"}
            </div>
          </div>
          <div className="text-md sm:text-sm leading-6 text-slate-500 py-4">
            <p className="mb-4">Categoría: {item.category}</p>
            <Link to={url}>
              <Button className="mt-4">Ver más</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
