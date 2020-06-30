import React, { Component } from "react"
import { connect } from "react-redux"
import Lists from "../components/lists/Lists"
import { addList, fetchLists, deleteList, toggleStarred } from "../actions/lists"
import { addItem } from "../actions/items"
import { Route } from "react-router-dom"
import SearchInput from "../components/search/SearchInput"
import { searchLists } from "../actions/search"

class SearchContainer extends Component {

    render() {

        const lists = this.props.lists

        return (
            <div>
                <SearchInput searchLists={this.props.searchLists}/>
                <Route exact path={this.props.match.url} render={() => <Lists
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
    const lists = state.lists.searchedLists.filter(list => state.lists.lists.includes(list))
    return {
        lists: lists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLists: () => dispatch(fetchLists()),
        addList: listName => dispatch(addList(listName)),
        deleteList: listId => dispatch(deleteList(listId)),
        addItem: item => dispatch(addItem(item)),
        searchLists: term => dispatch(searchLists(term)),
        toggleStarred: (listId, starred) => dispatch(toggleStarred(listId, starred))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);