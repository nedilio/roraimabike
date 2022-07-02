import Item from "../Item/Item";

function ItemList(props) {
  return (
      <div className="sm:flex sm:flex-wrap">
        {props.items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
  );
}

export default ItemList;
