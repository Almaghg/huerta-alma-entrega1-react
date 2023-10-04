import {Button, Card} from 'react-bootstrap';


const ItemContainer = ({nombre, tipo, precio, onClick}) => {
  return (
    <Card className = "d-flex align-items-center justify-content-center card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {tipo}
        </Card.Text>
        <Card.Text>
          {precio}
        </Card.Text>
        <Button variant="primary" onClick={onClick}>Agregar</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemContainer;