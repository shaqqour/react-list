import React from 'react';
import Item from './Item';

const Items = ({items, deleteItem, changeToDoing}) => {

    return (
        <ul>
            {items.map(item => <Item key={item.id} item={item} deleteItem={deleteItem} changeToDoing={changeToDoing}/>)}
        </ul>
    )

}

export default Items