import React, { Component } from "react"
import ListInput from "../components/lists/ListInput"
import { connect } from "react-redux"
import Lists from "../components/lists/Lists"
import { addList, fetchLists, deleteList, toggleStarred } from "../actions/lists"
import { addItem } from "../actions/items"
import { Route } from "react-router-dom"

class ListsContainer extends Component {

    render() {

        const lists = this.props.lists

        return (
            <div>
                <ListInput addList={this.props.addList} />
                <Route exact path={this.props.match.url} render={ () => <Lists
                                                                            lists={lists}
                                                                            deleteList={this.props.deleteList}
                                                                            addItem={this.props.addItem}
                                                                            toggleStarred={this.props.toggleStarred}
                                                                        />}
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
        addItem: item => dispatch(addItem(item)),
        toggleStarred: (listId, starred) => dispatch(toggleStarred(listId, starred))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer);