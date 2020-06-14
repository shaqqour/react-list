import React, { Component } from "react";

class ListInput extends Component {

    state = {
        name: ""
    }

    render() {
        return (
            <div>
                <span className="createlist">Create your lists here
                    <form>
                        <input type="text" value={this.state.name} />
                        <input className="submit" type="submit" value="Create List"/>
                    </form>
                </span>
            </div>
        )
    }

}

export default ListInput;