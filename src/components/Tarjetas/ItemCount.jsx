import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const ItemCount = ({cantidad, setCantidad, stock}) => {

return (
    <ButtonGroup>
        <Button variant="secondary" disabled={cantidad === 1 ? 'disabled' : null } onClick={() => setCantidad(cantidad - 1)}>-</Button>
        <h3> {cantidad} </h3>
        <Button variant="secondary" disabled={cantidad === stock ? 'disabled' : null } onClick={() => setCantidad(cantidad + 1)}>+</Button>
    </ButtonGroup>      
)}

export default ItemCount;