import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import ItemCount from '../Tarjetas/ItemCount'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Tarjetas.css'

const Tarjetas = ({productos}) => {
    console.log(productos)
    const [cantidad, setCantidad] = useState(1);

    const agregarCarrito = () => {
        if (cantidad <= productos.stock){
            alert(`Agregaste ${cantidad} productos al carrito`);
            productos.stock = productos.stock - cantidad
        }else{
            alert(`No se pudo agregar la cantidad de ${cantidad} productos al carrito porque supera al stock disponible (${productos.stock}).`);
        }
    }
    return (
        <CardDeck>
            <Card>
                <Card.Img class='imagen' variant="top" src={productos.imagen} alt="Imagen del producto" />
                <Card.Body>
                <Card.Title>{productos.titulo}</Card.Title>
                <Card.Text>
                    {productos.descripcion}
                    <br></br>
                    {productos.precio}
                    <br></br>
                    <ButtonGroup>
                        <ItemCount cantidad = {cantidad} setCantidad = {setCantidad} stock = {productos.stock}/>
                    </ButtonGroup>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" size="lg" onClick={agregarCarrito}>Agregar al carrito</Button>
                    <br/>
                    <Button variant="primary" size="lg"><Link to={`/item/${productos.id}`}>Ver más</Link></Button>
                </Card.Footer>
            </Card>
        </CardDeck>
    )
}

export default Tarjetas;