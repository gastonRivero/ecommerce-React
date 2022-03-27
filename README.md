# Distillar

Este proyecto, es la recreación de un eCommerce de bebidas alcoholicas creado por Angela Lauriola en el curso de Ecommerce que realiza Coderhouse. Si bien, es ficticio. Me fue de mucha utilidad poder plasmar el front de su idea en una pagina web.

## Tecnologia utilizada

HTML+CSS+JAVASCRIPT

## Framework utilizado

Bootstrap

## Clonar repositorio

https://github.com/gastonRivero/ecommerce-React.git

## Instalar dependencias

npm instal

## Ejecutar proyecto

npm start

## Componentes

Los componentes utilizados se alojan en distintas carpetas en la raiz "components":

- cart: esta compuesto por dos componentes, Cart.jsx y CartWidget.jsx. En el se desarrolla el carrito de compras del usuario alojanndo en si mismo otros componentes y su debida lógica.
- cartItem: Contiene el componente CartItem.jsx, encargado de dar formato y posición a los productos comprados por el usuario y dando función a diferentes acciones como sumar elementos, restarlos y borrarlos.
- checkout: Contiene el componente Checkout.jsx encargado de proporcionar un formulario para finalizar la compra.
- counter: Compuesto por componente ItemCount.jsx, este maneja la cantidad de elementos a comprar teniendo en cuenta el stock de los productos.
- footer: Aloja solo a Footer.jsx.
- header: Contiene a Header.jsx donde se visualiza el logo del comercio y el carrito de compras. El mismo es responsive y se guarda dentro del menú hamburguesa al disminuir la resolución.
- itemDetail: Aloja solo a ItemDetail.jsx, este componente se encarga de renderizar los datos otorgados por el "ItemDetailContainer".
- itemDetailContainer: Aloja solo a ItemDetailContainter.jsx, dado un ID de producto se encarga de obtener toda la informacion necesaria para renderizar el detalle de un producto, este componente pasa dicha informacion al componente "ItemDetail".
- itemListContainer: está compuesto por los componentes Item.jsx, ItemList.jsx, ItemListContainer.jsx. El "ItemListContainer" se encarga de consultar todos los productos y pasarselos al "ItemList", por su parte, este requiere un array de productos, se encarga de hacer un map y pasarle los datos al "Item" que por último recibe todos los datos requeridos para renderizar un producto en pantalla (previsualizacion del producto)
- navbar: Aloja solo a Navbar.jsx.
- utilities: Contiene a Utilities.jsx que exporta diferentes constantes de utilidad como navlinks o el spinner de carga.

## SRC

Para el desarrollo de esta app, incluimos el uso de Firebase con sus hooks, para poder generar la orden a través de su logica y poder exportar los productos. También, utilicé Context para facilitar la utilización de la app mediante el uso de estados. Se tomó datos de assets para colocar logos y demas imagenes. Distillar está debidamente organizada mediante rutas dinamicas.
