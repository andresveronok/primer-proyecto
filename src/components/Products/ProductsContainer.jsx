import Tarjetas from '../Tarjetas/Tarjetas'
import foto from '../../assets/pantalonMujer.jpg'


function ProductsContainer() {
    return (
      <>
        <Tarjetas imagen = {foto} titulo = "Pantalon1" descripcion = "Descripcion1" precio = {250} stock={2}/>
        <Tarjetas imagen = {foto} titulo = "Pantalon2" descripcion = "Descripcion2" precio = {300} stock={5}/>        
      </>
    );
  }
  
  export default ProductsContainer;