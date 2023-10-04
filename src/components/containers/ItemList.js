import ItemContainer from './ItemContainer'


const ItemList = ({products}) => {
    return (
        <div className='ListGroup'/>
        {products.map(prod => <ItemContainer key={prod.nombre}{...prod}/>)}
    )
}

export default ItemList