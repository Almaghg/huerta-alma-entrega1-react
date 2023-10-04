import {Button, Card} from 'react-bootstrap';
import ItemCount from './ItemCount';


const ItemContainer = ({nombre, tipo, precio, onClick}) => {
  return (
    <Card className = "d-flex align-items-center justify-content-center card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {tipo}
        </Card.Text>
        <Card.Text>
          {precio}
        </Card.Text>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
        <Link to={`/item/${id}`} className='Option'>Ver Detalle</Link>
      </Card.Body>
    </Card>
  );
}

export default ItemContainer;