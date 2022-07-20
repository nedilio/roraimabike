# RORAIMABIKE

Es un e-commerce desarrolado en react para un taller de bicicletas para el curso de ReactJS de Coderhouse.

### Deploy en [RoraimaBike](https://chimerical-belekoy-ae2a64.netlify.app/)

![](./roraimabike.GIF)

## RECURSOS UTILIZADOS
1. Se inició el proyecto utilizando [Create React App](https://github.com/facebook/create-react-app).

2. Para los estilos se usa el framework css [Tailwind](https://tailwindcss.com/docs/utility-first).

3. Los iconos son de la librería [react-bootstrap-icons](https://github.com/ismamz/react-bootstrap-icons#readme).

4. Como base de datos su utiliza [Firebase](https://firebase.google.com/)

## Entrega Final
- Los productos estan en firebase, se traen todos los productos o al seleccionar una categoria los productos que pertenecen a ella.
- En el home se muestra un componente que incluye los cards de los productos cargados. Este mismo componente muestra los productos filtrados por categorias que se seleccionan desde el menu.
- Al hacer click en ver mas de un producto se carga la vista de los detalles de producto.
- Se puede agregar productos al carrito desde la vista detalle y el maximo es el determinado por el stock disponible del producto.
- En el carrito se puede volver al producto para actualizar la cantidad (no se suman de nuevo para poder decidir si quiero menos productos de los que estaban agregados).
- Al finalizar la compra se redirige a un componente donde se muestra el resumen de la orden y su id tambien se descuenta los productos comprados del stock.

## Scripts

En el directorio, se puede usar:

### `yarn start`

Inicia la app en [http://localhost:3000](http://localhost:3000)