// import ProductCard from '../ProductCard/ProductCard';
import './itemlistcontainer.css';

function ItemListContainer(props) {
  return (
<section className="products mt-4 mb-4">
  <div className="container-fluid">
    <div className="row">
      <h1>{props.greeting}</h1>
    </div>
  </div>
</section>
  );
}

export default ItemListContainer;
