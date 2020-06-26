import React, { Component } from "react"
import { connect } from "react-redux"
import Lists from "../components/lists/Lists"
import { addList, fetchLists, deleteList } from "../actions/lists"
import { addItem } from "../actions/items"
import { Route } from "react-router-dom"
import SearchInput from "../components/search/SearchInput"

class SearchContainer extends Component {

    state = {
        term: ""
    }

    render() {

        const lists = this.props.lists

        return (
            <div>
                <SearchInput />
                
                <Route exact path={this.props.match.url} render={() => <Lists
                                                                            lists={lists}
                                                                            deleteList={this.props.deleteList}
                                                                            addItem={this.props.addItem}
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
        addItem: item => dispatch(addItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);