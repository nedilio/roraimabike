import Item from "../Item/Item";

function ItemList(props) {
  return (
    <div className="row">
      {props.items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ItemList;
