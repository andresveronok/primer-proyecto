
const ProductoDetalle = ({item}) => {
    console.log(item)
    return (
        <article>
            <h1>{item.nombre}</h1>
            <img src={item.imagen} alt=""/>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <button>Agregar al carrito</button>
        </article>
    )
}



export default ProductoDetalle;