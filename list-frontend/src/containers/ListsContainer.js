import React, { Component } from "react"
import ListInput from "../components/lists/ListInput"
import { connect } from "react-redux"
import Lists from "../components/lists/Lists"
import { addList, fetchLists, deleteList } from "../actions/lists"
import { addItem } from "../actions/items"

class ListsContainer extends Component {

    render() {
        return (
            <div>
                <ListInput addList={this.props.addList} />
                <Lists
                    lists={this.props.lists}
                    deleteList={this.props.deleteList}
                    addItem={this.props.addItem}
                />
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
        deleteList: listId => dispatch(deleteList(listId)),
        addItem: item => dispatch(addItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer);