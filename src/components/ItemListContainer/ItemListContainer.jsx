import './itemlistcontainer.css';
function ItemListContainer(props) {
  return (
    <div className="container-fluid">
      <section className="row">
          <div className="col mt-3 mb-3">
            <h1 className="itemListContainer-title">{props.greeting}</h1>
          </div>
      </section>
    </div>
  );
}

export default ItemListContainer;
