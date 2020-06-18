import React, { Component } from 'react';
import ItemInput from '../components/items/ItemInput';
import Items from '../components/items/Items';

class ItemsContainer extends Component {

    render() {
        const list = this.props.list
        return(
            <div>
                <ItemInput />
                <Items/>
            </div>
        )
    }

}

export default ItemsContainer