import React, { Component } from 'react';
import Items from '../components/items/Items';
import { fetchItems, deleteItem } from '../actions/items';
import { connect } from 'react-redux';

class ItemsContainer extends Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        const items = this.props.items.filter(item => item.list_id === this.props.listId && item.status === this.props.status)

        return(
            <div>
                <Items items={items} deleteItem={this.props.deleteItem}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.items.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: () => dispatch(fetchItems()),
        deleteItem: (itemId) => dispatch(deleteItem(itemId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)