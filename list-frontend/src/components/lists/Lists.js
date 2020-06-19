import React from 'react';
import List from './List';

const Lists = ({lists}) => {

    return (
        <div>
            {
                lists.map(list => <List key={list.id} list={list.attributes || list} />)
            }
        </div>
    )

}

export default Lists