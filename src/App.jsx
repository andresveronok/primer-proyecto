import {useState} from 'react';
import Menu from './components/Menu/Menu';
import ProductsContainer from './components/Products/ProductsContainer';
import Producto from './components/Detalles/Producto';
import Carro from './components/Carrito/carro';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Store} from './store/index';

function App() {
  const [data,setData] = useState({
    items: [],
    cantidad: 0,
    precioTotal: 0,
  })


  return (
    <>
    <Store.Provider value={[data,setData]}>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path='/'>
            <ProductsContainer />  
          </Route>
          <Route path="/carro">
            <Carro />
          </Route>
          <Route exact path='/category/:categoryid'>
            <ProductsContainer />  
          </Route>
          <Route exact path='/item/:itemid'>
            <Producto /> 
          </Route>   
        </Switch>
      </BrowserRouter>
    </Store.Provider>
    </>
  );
}

export default App;
