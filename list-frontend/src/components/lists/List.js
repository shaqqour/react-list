import React, { Component } from 'react';
import ItemsContainer from '../../containers/ItemsContainer';
import ItemInput from '../items/ItemInput';

class List extends Component {

    state ={
        showDetails: true
    }

    handleDelete = (event) => {
        this.props.deleteList(this.props.list.id)
    }
    handleDetails = (event) => {
        this.setState({
            showDetails: !this.state.showDetails
        })
        if (event.target.innerHTML === "Consolidate") {
            event.target.innerHTML = "Expand" 
        }else {
            event.target.innerHTML = "Consolidate"
        }
    }

    render() {

        const list = this.props.list;

        return (
            <main>
                <div className="list" id={list.id}>
                    <button className="deletelist" onClick={this.handleDelete}>Delete List</button>
                    <button className="details" onClick={this.handleDetails}>Consolidate</button>
                    <p>{list.name} (to do)</p>
                    <ItemInput list={list} addItem={this.props.addItem}/>
                    <ItemsContainer listId={list.id} status={this.state.showDetails ? "to_do" : "all"} />
                </div>
                <div className="list doing" id={list.id} style={{ display: this.state.showDetails ? "block" : "none" }}>
                    <p>{list.name} (doing)</p>
                    <ItemsContainer listId={list.id} status="doing"/>
                </div>
                <div className="list done" id={list.id} style={{ display: this.state.showDetails ? "block" : "none" }}>
                    <p>{list.name} (done)</p>
                    <ItemsContainer listId={list.id} status="done"/>
                </div>
            </main>
        )

    }

}

export default List