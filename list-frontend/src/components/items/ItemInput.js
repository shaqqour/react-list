import React, { Component } from 'react';

class ItemInput extends Component {

    render() {
        const list = this.props.list
        return (
            <div>
                <form>
                    <input type="text"/>
                    <input className="submit" type="submit" value="Add"/>
                </form>
            </div>
        )
    }

}

export default ItemInput