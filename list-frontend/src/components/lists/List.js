import React, { Component } from 'react';
import ItemsContainer from '../../containers/ItemsContainer';
import ItemInput from '../items/ItemInput';

class List extends Component {

    render() {

        const list = this.props.list;

        return (
            <main>
                <div className="list" id={list.id}>
                    <button className="delete">Delete List</button>
                    <p>{list.name} (to do)</p>
                    <ItemInput />
                    <ItemsContainer items={list.items.filter(item => item.status === "to_do")}/>
                </div>
                <div className="list doing" id={list.id}>
                    <p>{list.name} (doing)</p>
                    <ItemsContainer items={list.items.filter(item => item.status === "doing")}/>
                </div>
            </main>
        )

    }

}

export default List