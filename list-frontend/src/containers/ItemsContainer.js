import React, { Component } from 'react';
import Items from '../components/items/Items';

class ItemsContainer extends Component {

    render() {
        const items = this.props.items
        return(
            <div>
                <Items items={items} />
            </div>
        )
    }

}

export default ItemsContainer