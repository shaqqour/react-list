import React, { Component } from "react"
import { connect } from "react-redux"
import { addList, fetchLists, deleteList, toggleStarred } from "../actions/lists"
import { addItem } from "../actions/items"
import { Route } from "react-router-dom"
import StarredLists from "../components/lists/StarredLists"

class StarredContainer extends Component {

    render() {

        const lists = this.props.lists

        return (
            <div>
                <Route exact path={this.props.match.url} render={() => <StarredLists
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

export default connect(mapStateToProps, mapDispatchToProps)(StarredContainer);