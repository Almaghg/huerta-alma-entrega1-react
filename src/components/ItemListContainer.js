import React from 'react';

export const ListContainer = (props) =>{

    const { greetings } = props;
    return (
       <h1>{greetings}</h1>
    )

}

export default ListContainer;