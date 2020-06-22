import React from 'react';
import Item from './Item';

const Items = ({items, deleteItem, changeToDoing, changeToDone}) => {

    return (
        <ul>
            {items.map(item => <Item
                                    key={item.id}
                                    item={item}
                                    deleteItem={deleteItem}
                                    changeToDoing={changeToDoing}
                                    changeToDone={changeToDone}
                                />
            )}
        </ul>
    )

}

export default Items