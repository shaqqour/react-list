import React, { Component } from "react"
import ListInput from "../components/lists/ListInput"
import { connect } from "react-redux"

class ListsContainer extends Component {

    render() {
        return (
            <div>
                <ListInput/>
            </div>
        )
    }

    componentDidMount() {
        fetch("http://localhost:3000/lists")
        .then(response => response.json())
        .then(jsonObject => this.addLists(jsonObject.data))
    }

    addLists(lists) {
        lists.forEach(list => {
            this.props.addList(list)
        });
    }

}

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addList: list => dispatch({type: "ADD_LIST", list})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer);