import {useState, useEffect} from 'react';
import {getPtoductById} from '../../products'
import ItemDetail from '../containers/ItemDetail'
import {useParams} from 'react-router-dom'

export const ItemDetailContainer = () =>{
    const [product, setProduct] = useState (null)

    const {ItemId} = useParams()

    useEffect (() => {
        getPtoductById(ItemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [ItemId])

    return (
        <div className='ItemDetailContainer'>
        <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetailContainer;