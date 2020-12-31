import {useEffect, useState} from 'react';
import ProductoDetalle from './ProductoDetalle';

const Producto = () => {
    const [producto, setProducto] = useState(null);

    const getProducto = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1, 
                nombre: "Remera",
                foto: "http://placehold.it/350x400",
                descripcion: "Remera muy comoda de algodon",
                precio: 800
            })
        }, 2000);
    });

    useEffect(() => {
        getProducto
        .then(response => setProducto(response))
        .catch(error => console.log(error));
    }, []);

    return (
        <>
            {
                <div className="container">
                    <ProductoDetalle item={producto} />
                </div>
            }
        </>
    )
}
export default Producto;