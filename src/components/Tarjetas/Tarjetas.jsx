import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import ItemCount from '../Tarjetas/ItemCount'
import {useState} from 'react'
import './Tarjetas.css'

const Tarjetas = ({imagen, titulo, descripcion, precio, stock}) => {

    const [cantidad, setCantidad] = useState(1);

    const agregarCarrito = () => {
        if (cantidad <= stock){
            alert(`Agregaste ${cantidad} productos al carrito`);
            stock = stock - cantidad
        }else{
            alert(`No se pudo agregar la cantidad de ${cantidad} productos al carrito porque supera al stock disponible (${stock}).`);
        }
    }
    return (
        <CardDeck>
            <Card>
                <Card.Img class='imagen' variant="top" src={imagen} alt="Imagen del producto" />
                <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    {descripcion}
                    <br></br>
                    {precio}
                    <br></br>
                    <ButtonGroup>
                        <ItemCount cantidad = {cantidad} setCantidad = {setCantidad} stock = {stock}/>
                    </ButtonGroup>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" size="lg" onClick={agregarCarrito}>Agregar al carrito</Button>
                </Card.Footer>
            </Card>
        </CardDeck>
    )
}

export default Tarjetas;