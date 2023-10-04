import React from 'react';
import ItemCount from './ItemCount';
import ItemContainer from './ItemContainer'; 
/* import {useEffect} from 'react'; */

export const ListContainer = (props) =>{

    const { greetings } = props;
    return (
       <h1>{greetings}</h1>
    )

}


export default ListContainer;