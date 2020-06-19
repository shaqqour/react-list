import React, { Component } from "react"
import ListInput from "../components/lists/ListInput"
import { connect } from "react-redux"
import Lists from "../components/lists/Lists"
import { addList, fetchLists } from "../actions/lists"

class ListsContainer extends Component {

    render() {
        return (
            <div>
                <ListInput addList={this.props.addList} />
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
        lists: state.lists.lists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLists: () => dispatch(fetchLists()),
        addList: listName => dispatch(addList(listName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer);