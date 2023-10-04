import React from 'react';
import ItemContainer from './ItemContainer'; 
import {useState, useEffect} from 'react';
import {getPtoducts} from '../../products'

import {useParams} from 'react-router-dom'

export const ListContainer = ({greetings}) =>{
    const [products, setProducts] = useState ([])

    const {tipoId} = useParams()

    useEffect (() => {

    const asyncFunc = tipoId ? getProductsByTipo: getPtoductsProducts

        asyncFunc(tipoId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div>
        <h1>{greetings}</h1>
        <Itemlist products={products}/>
        </div>
    )

}

export default ListContainer;