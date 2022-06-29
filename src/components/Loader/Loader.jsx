// import { ArrowClockwise } from "react-bootstrap-icons";
import { PropagateLoader } from "react-spinners";
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <PropagateLoader speedMultiplier={2} color="#fc6f18" size={20} />
    </div>
  );
};

export default Loader;
