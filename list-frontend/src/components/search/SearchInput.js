import React, { Component } from "react";

class SearchInput extends Component {

    state = {
        term: ""
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            term: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchLists(this.state.term)
        this.setState({
            term: ""
        })
    }

    render() {
        return (
            <div>
                <span className="searchlist">Search Lists
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.term} onChange={this.handleChange} placeholder="Term" />
                        <input className="submit" type="submit" value="Search" />
                    </form>
                </span>
            </div>
        )
    }

}

export default SearchInput;