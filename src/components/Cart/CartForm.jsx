const CartForm = ({ handleOnChange, handleBuyOrder, validateBuyerData }) => {
  return (
    <>
      <h4 className="mb-2">Datos del usuario</h4>
      <form
        onSubmit={(e) => e.preventDefault}
        className="shadow p-4 rounded w-full"
      >
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
            type="number"
            name="phone"
            onChange={handleOnChange}
          />
        </div>
        <button
          type="button"
          onClick={handleBuyOrder}
          disabled={validateBuyerData()}
          className="mx-auto bg-orange-500 hover:bg-orange-300 text-slate-800 px-4 py-4 capitalize text-xs tracking-wider border-2 border-slate-800 transition ease-in-out delay-150 disabled:opacity-50 disabled:pointer-events-none"
        >
          Terminar Compra
        </button>
      </form>
    </>
  );
};

export default CartForm;
