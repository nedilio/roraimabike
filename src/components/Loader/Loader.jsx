import { ArrowClockwise } from "react-bootstrap-icons";
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <ArrowClockwise className="image_rotate" size={80} color="white" />
    </div>
  );
};

export default Loader;
