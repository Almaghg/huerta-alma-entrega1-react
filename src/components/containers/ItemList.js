import ItemContainer from './ItemContainer'


export const ItemList = ({ products }) => {
    return (
      <div className='ListGroup'>
        {products.map(prod => <ItemContainer key={prod.nombre} {...prod} />)}
      </div>
    );
  };
  

export default ItemList;