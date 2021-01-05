import {useState, useEffect} from 'react';
import Tarjetas from '../Tarjetas/Tarjetas'
import {listaProductos} from '../../assets/productos'
import {useParams} from 'react-router-dom'

const ProductsContainer = () => {

  const [items, setItems] = useState([]);

  const {categoryid} = useParams()
  console.log(categoryid)

    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(listaProductos);
      }, 500)
    })

      const getProducstFromDB = async () => {
        try {
            const result = await getProducts;
            if(categoryid){
              const productoPorCategoria = result.filter((producto) => producto.categoria === categoryid)
              setItems(productoPorCategoria);
            }else{
              setItems(result)
            }

        } catch(error) {
            alert('No podemos mostrar los productos en este momento');
        }
    }

    useEffect(() => {
        getProducstFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryid])

    useEffect(() =>  {
        console.log(items)
        items.map(item => console.log(item))
    }, [items])

    return (
      <ul>
        {
          items.map(item => (
            <li key = {item.id}>
            <Tarjetas productos = {items} />
            </li>
          ))
        }
      </ul>
    );

  }
  
  export default ProductsContainer;