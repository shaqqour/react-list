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

}

const mapDispatchToProps = (dispatch) => {
    return {
        addList: list => dispatch({type: "ADD_LIST", list})
    }
}

export default connect(null, mapDispatchToProps)(ListsContainer);