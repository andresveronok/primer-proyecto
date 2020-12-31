import {useState, useEffect} from 'react';
import Tarjetas from '../Tarjetas/Tarjetas'
import {listaProductos} from '../../assets/productos'

const ProductsContainer = () => {

  const [items, setItems] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(listaProductos);
      }, 5000)
    })

      const getProducstFromDB = async () => {
        try {
            const result = await getProducts;
            setItems(result);
        } catch(error) {
            alert('No podemos mostrar los productos en este momento');
        }
    }

    useEffect(() => {
        getProducstFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() =>  {
        console.log(items)
        items.map(item => console.log(item))
    }, [items])

    return (
      <ul>
        {
          items.map(item => (
            <li key = {item.id}>
            <Tarjetas imagen = {item.imagen} titulo = {item.titulo} descripcion = {item.descripcion} precio = {item.precio} stock={item.stock}/>
            </li>
          ))
        }
      </ul>
    );
  }
  
  export default ProductsContainer;