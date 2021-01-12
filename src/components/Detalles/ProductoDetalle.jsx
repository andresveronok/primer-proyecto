import {useHistory} from 'react-router-dom';


const ProductoDetalle = ({item}) => {
    const history = useHistory();
    const onAdd = () => {
        history.push('/carro');
    }
    console.log(item)
    return (
        <article>
            <h1>{item.nombre}</h1>
            <img src={item.imagen} alt=""/>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <button onClick={onAdd}>Agregar al carrito</button>
        </article>
    )
}

export default ProductoDetalle;