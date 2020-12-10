import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


const Tarjetas = ({imagen, titulo, descripcion, precio}) => {
    return (
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={imagen} alt="Imagen del producto" />
                <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">{precio}</small>
                </Card.Footer>
            </Card>
        </CardDeck>
    )
}

export default Tarjetas;