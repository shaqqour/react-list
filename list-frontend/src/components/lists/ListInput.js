import React, { Component } from "react";

class ListInput extends Component {

    state = {
        name: ""
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addList(this.state.name)
    }

    render() {
        return (
            <div>
                <span className="createlist">Create your lists here
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="List name"/>
                        <input className="submit" type="submit" value="Create List"/>
                    </form>
                </span>
            </div>
        )
    }

}

export default ListInput;