import {useContext} from 'react';
import {Store} from '../../store/index';

const Carro = () => {
    const [data,setData] = useContext(Store);
    console.log(data)
    return (
        <>
            <h1>Carrito</h1>
            {
                data.items.map(item => 
                    <>
                    <h2>Nombre: {item.item.titulo}</h2>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio unitario: {item.item.precio}</p>
                    <p>Precio total: {item.item.precio * item.cantidad}</p>
                    <p>Precio Final: {data.precioTotal}</p>
                    </>)
            }
        </>
    )
}
export default Carro;