import Menu from './components/Menu/Menu';
import Tarjetas from './components/Tarjetas/Tarjetas'
import foto from './assets/pantalonMujer.jpg'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <>
      <Menu />
      <Tarjetas imagen = {foto} titulo = "Pantalon1" descripcion = "Descripcion1" precio = "250"/>
      <Tarjetas imagen = {foto} titulo = "Pantalon2" descripcion = "Descripcion2" precio = "300"/>        
    </>
  );
}

export default App;
