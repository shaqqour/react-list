import React from 'react';
import List from './List';

const Lists = ({lists, deleteList, addItem, toggleStarred}) => {

    return (
        <div>
            {
                lists.map(list => <List
                                    key={list.id}
                                    list={list.attributes || list}
                                    deleteList={deleteList}
                                    addItem={addItem}
                                    toggleStarred={toggleStarred}
                                    />)
            }
        </div>
    )

}

export default Lists