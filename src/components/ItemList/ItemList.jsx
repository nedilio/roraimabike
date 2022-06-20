import Item from "../Item/Item";

function ItemList(props) {
  return (
      <>
        {props.items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </>
  );
}

export default ItemList;
