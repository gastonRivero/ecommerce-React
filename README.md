# Distillar
Este proyecto, es la recreación de un eCommerce de bebidas alcoholicas.

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
- cart: esta compuesto por dos componentes, Cart.jsx y CartWidget.jsx.  En el se desarrolla el carrito de compras del usuario.
- counter: Compuesto por ItemCount.jsx y UseCount.jsx.
- footer: Aloja solo a Footer.jsx.
- itemDetailContainer: Aloja solo a ItemDetailContainter.jsx, dado un ID de producto se encarga de obtener toda la informacion necesaria para renderizar el detalle de un producto, este componente pasa dicha informacion al componente "ItemDetail".
- itemDetail: Aloja solo a ItemDetail.jsx, este componente se encarga de renderizar los datos otorgados por el "ItemDetailContainer".
- itemListContainer: está compuesto por los componentes Item.jsx, ItemList.jsx, ItemListContainer.jsx. El "ItemListContainer" se encarga de consultar todos los productos y pasarselos al "ItemList", por su parte, este requiere un array de productos, se encarga de hacer un map y pasarle los datos al "Item" que por último  recibe todos los datos requeridos para renderizar un producto en pantalla (previsualizacion del producto)
		Aquí dentro tambien se enceuntra la carpeta category, que aloja a Tequila y Whisky.
- navbar: Aloja solo a Navbar.jsx.
