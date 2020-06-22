import React from 'react';
import Item from './Item';

const Items = ({items, deleteItem}) => {

    return (
        <ul>
            {items.map(item => <Item key={item.id} item={item} deleteItem={deleteItem}/>)}
        </ul>
    )

}

export default Items