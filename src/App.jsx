import Menu from './components/Menu/Menu';
import ProductsContainer from './components/Products/ProductsContainer'
import Producto from './components/Detalles/Producto'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path='/'>
            <ProductsContainer />  
          </Route>
          <Route exact path='/category/:categoryid'>
            <ProductsContainer />  
          </Route>
          <Route exact path='/item/:itemid'>
            <Producto /> 
          </Route>   
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
