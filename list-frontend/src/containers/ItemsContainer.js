import React, { Component } from 'react';
import Items from '../components/items/Items';
import { fetchItems } from '../actions/items';
import { connect } from 'react-redux';

class ItemsContainer extends Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        const items = this.props.items.filter(item => item.attributes.list_id === this.props.listId && item.attributes.status === this.props.status)

        return(
            <div>
                <Items items={items} />
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
        fetchItems: () => dispatch(fetchItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)