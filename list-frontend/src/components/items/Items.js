import React from 'react';
import Item from './Item';

const Items = ({items}) => {

    return (
        <ul>
            {items.map(item => <Item key={item.id} item={item.attributes} />)}
        </ul>
    )

}

export default Items