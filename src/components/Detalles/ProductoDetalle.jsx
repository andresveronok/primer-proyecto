import {Store} from '../../store/index';
import {useHistory} from 'react-router-dom';
import {useState, useContext} from 'react';


const ProductoDetalle = ({item}) => {
    const [data, setData] = useContext(Store)
    const [qty, setQty] = useState(1);
    const history = useHistory();

    const handleClickResta = () => {
        if (qty > 1){
            setQty(qty - 1);
        }
    }

    const onAdd = () => {
        setData({
            ...data, 
            cantidad: data.cantidad + qty,
            items: [...data.items, item],
        });
        history.push('/carro');
//        alert(`Agregaste ${qty} productos al carrito`)
    }
    console.log(data)
    return (
        <article>
            <h1>{item.nombre}</h1>
            <img src={item.imagen} alt=""/>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <div>
                <button
                    disable={qty === 1 ? 'disabled' : null}
                    onclick={handleClickResta} 
                > -
                </button>
                <input type='text' value={qty} readOnly/>
                <button onClick={() => setQty(qty + 1)}>+</button> 
            </div>
            <button onClick={onAdd}>Agregar al carrito</button>
        </article>
    )
}

export default ProductoDetalle;