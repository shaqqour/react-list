import React, { Component } from 'react';
import ItemsContainer from '../../containers/ItemsContainer';
import StarIcon from '@material-ui/icons/Star';
import ItemInput from '../items/ItemInput';

class List extends Component {

    state ={
        showDetails: true,
        starred: this.props.list.starred
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
    handleClick = (event) => {
        this.props.toggleStarred(this.props.list.id, !this.state.starred)
        this.setState({
            starred: !this.state.starred
        })
    }

    render() {

        const list = this.props.list;
        let isStarred = this.state.starred

        return (
            <main>
                <div className="list" id={list.id}>
                    <button className="deletelist" onClick={this.handleDelete}>Delete List</button>
                    <button className="details" onClick={this.handleDetails}>Consolidate</button>
                    <p>
                        {list.name} (to do)
                        <StarIcon onClick={this.handleClick} className="star" style={{ color: isStarred ? "yellow" : "white"}}/>
                    </p>
                    
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