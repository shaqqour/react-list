import React, { Component } from "react"
import ListInput from "../components/lists/ListInput"
import { connect } from "react-redux"
import Lists from "../components/lists/Lists"
import { addList, fetchLists, deleteList } from "../actions/lists"

class ListsContainer extends Component {

    render() {
        return (
            <div>
                <ListInput addList={this.props.addList} />
                <Lists lists={this.props.lists} deleteList={this.props.deleteList}/>
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchLists();
    }

}

const mapStateToProps = (state) => {
    return {
        lists: state.lists.lists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLists: () => dispatch(fetchLists()),
        addList: listName => dispatch(addList(listName)),
        deleteList: listId => dispatch(deleteList(listId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer);