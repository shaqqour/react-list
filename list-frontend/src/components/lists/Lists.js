import React from 'react';
import List from './List';

const Lists = ({lists, deleteList}) => {

    return (
        <div>
            {
                lists.map(list => <List key={list.id} list={list.attributes || list} deleteList={deleteList}/>)
            }
        </div>
    )

}

export default Lists