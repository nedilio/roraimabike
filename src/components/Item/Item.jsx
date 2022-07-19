import { Link } from "react-router-dom";
import useCurrency from "../../hooks/useCurrency";
import Button from "../Button/Button";
import NoStock from "../NoStock/NoStock";

function Item({ item }) {
  const url = `/item/${item.id}`;
  return (
    <div className="w-11/12 mx-auto mb-6 rounded sm:w-80 md:w-96 sm:justify-around">
      <div className="text-center shadow-md overflow-hidden">
        <div className="p-3 relative">
          <Link to={url} className="flex justify-center bg-slate-100">
            {item.stock === 0 && <NoStock />}
            <img
              src={item.pictureUrl}
              className="w-6/12 md:w-full h-auto rounded transition ease-in-out delay-150 hover:scale-105"
              alt={item.title}
            />
          </Link>
        </div>
        <div className="md:flex-auto pl-6">
          <div className="relative flex flex-wrap items-baseline pb-6 pt-4 text-left before:bg-slate-800 before:absolute before:top-0 before:bottom-0 before:-left-6  before:-right-0">
            <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
              {item.title}
            </h1>
            <div className="relative text-lg text-white">
              {useCurrency(item.price)}
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
