import React, { Component } from 'react';
import ItemsContainer from '../../containers/ItemsContainer';

class List extends Component {

    render() {

        const list = this.props.list;

        return (
            <main>
                <div className="list" id={list.id}>
                    <button className="delete">Delete List</button>
                    <p>{list.name} (to do)</p>
                    <ItemsContainer list={list}/>
                </div>
            </main>
        )

    }

}

export default List