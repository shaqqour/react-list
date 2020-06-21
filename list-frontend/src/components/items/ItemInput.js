import React, { Component } from 'react';

class ItemInput extends Component {

    state ={
        name: "",
        status: "to_do",
        priority: null,
        due_date: null,
        list_id: this.props.list.id
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