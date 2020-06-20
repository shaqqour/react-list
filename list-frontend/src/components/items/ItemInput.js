import React, { Component } from 'react';

class ItemInput extends Component {

    state ={
        name: "",
        status: "",
        priority: null,
        dueDate: null,
        listId: null
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            name: ""
        })
    }

    render() {
        const list = this.props.list
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    <input className="submit" type="submit" value="Add"/>
                </form>
            </div>
        )
    }

}

export default ItemInput