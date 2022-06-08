// import ProductCard from '../ProductCard/ProductCard';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer(props) {
  return (
<section className="products mt-4 mb-4">
  <div className="container-fluid">
    <div className="row">
      <h1 className='itemListContainer-title'>{props.greeting}</h1>
      <ItemCount initial={1} stock={5}/>
      <ItemList />
    </div>
  </div>
</section>
  );
}

export default ItemListContainer;
