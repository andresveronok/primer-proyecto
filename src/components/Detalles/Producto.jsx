import {useEffect, useState} from 'react';
import ProductoDetalle from './ProductoDetalle';
import {listaProductos} from '../../assets/productos'
import {useParams} from 'react-router-dom'

const Producto = () => {
    const [producto, setProducto] = useState(null);

    const { itemid } = useParams;
    console.log(itemid)

    const getProducto = new Promise((resolve, reject) => {
        setTimeout(() => {
            const productoClickeado = listaProductos.find( producto => producto.id == itemid)
            resolve(productoClickeado);
        }, 2000);
    });
   
    const getProducstFromDB = async () => {
        try {
            const result = await getProducto;
            setProducto(result);
        } catch(error) {
            alert('No podemos mostrar los productos en este momento');
        }
    }

    useEffect(() => {
        getProducstFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                producto ?
                <>
                   <ProductoDetalle item = {producto}/>
                </> :
                <p>Cargando productos</p>
            }
        </>
    )
}
export default Producto;