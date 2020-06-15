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

    render() {
        return (
            <div>
                <span className="createlist">Create your lists here
                    <form>
                        <input type="text" value={this.state.name} onChange={this.handleChange}/>
                        <input className="submit" type="submit" value="Create List"/>
                    </form>
                </span>
            </div>
        )
    }

}

export default ListInput;