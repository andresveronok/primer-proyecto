import Tarjetas from '../Tarjetas/Tarjetas'
import foto from '../../assets/pantalonMujer.jpg'


function ProductsContainer() {
    return (
      <>
        <Tarjetas imagen = {foto} titulo = "Pantalon1" descripcion = "Descripcion1" precio = "250"/>
        <Tarjetas imagen = {foto} titulo = "Pantalon2" descripcion = "Descripcion2" precio = "300"/>        
      </>
    );
  }
  
  export default ProductsContainer;