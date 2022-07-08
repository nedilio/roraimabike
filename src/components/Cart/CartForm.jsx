import Button from "../Button/Button";

const CartForm = ({ handleOnChange, handleBuyOrder, validateBuyerData }) => {
  return (
    <section>
      <h4>Datos del usuario</h4>
      <form onSubmit={(e) => e.preventDefault}>
        <div className="flex flex-col mb-3">
          <label htmlFor="name" className="">
            Nombre
          </label>
          <input
            className="rounded border-orange-500 border p-2"
            type="text"
            name="name"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="email" className="">
            email
          </label>
          <input
            className="rounded border-orange-500 border p-2"
            type="email"
            name="email"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="phone" className="">
            Teléfono
          </label>
          <input
            className="rounded border-orange-500 border p-2"
            type="text"
            name="phone"
            onChange={handleOnChange}
          />
        </div>
        <Button onClick={handleBuyOrder} disabled={validateBuyerData()}>
          Terminar Compra
        </Button>
      </form>
    </section>
  );
};

export default CartForm;
