import React, { Component } from 'react';
import ItemsContainer from '../../containers/ItemsContainer';
import ItemInput from '../items/ItemInput';

class List extends Component {

    handleOnClick = (event) => {
        this.props.deleteList(this.props.list.id)
    }

    render() {

        const list = this.props.list;

        return (
            <main>
                <div className="list" id={list.id}>
                    <button className="delete" onClick={this.handleOnClick}>Delete List</button>
                    <p>{list.name} (to do)</p>
                    <ItemInput list={list}/>
                    <ItemsContainer listId={list.id} status="to_do"/>
                </div>
                <div className="list doing" id={list.id}>
                    <p>{list.name} (doing)</p>
                    <ItemsContainer listId={list.id} status="doing"/>
                </div>
                <div className="list done" id={list.id}>
                    <p>{list.name} (done)</p>
                    <ItemsContainer listId={list.id} status="done"/>
                </div>
            </main>
        )

    }

}

export default List