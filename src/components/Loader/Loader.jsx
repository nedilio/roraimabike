import { PropagateLoader } from "react-spinners";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader w-full flex items-center justify-center">
      <PropagateLoader speedMultiplier={2} color="#fc6f18" size={20} />
    </div>
  );
};

export default Loader;
