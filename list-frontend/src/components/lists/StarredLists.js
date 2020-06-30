import React from 'react';
import List from './List';

const StarredLists = ({ lists, deleteList, addItem, toggleStarred }) => {

    lists = lists.filter(list => {
        list = list.attributes || list
        return list.starred
    })

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

export default StarredLists