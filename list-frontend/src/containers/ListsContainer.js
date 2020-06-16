import React, { Component } from "react"
import ListInput from "../components/lists/ListInput"
import { connect } from "react-redux"
import Lists from "../components/lists/Lists"
import { addList, fetchLists } from "../actions/lists"

class ListsContainer extends Component {

    render() {
        return (
            <div>
                <ListInput/>
                <Lists lists = {this.props.lists} />
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchLists();
    }

}

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLists: () => dispatch(fetchLists()),
        addList: list => dispatch(addList(list))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer);