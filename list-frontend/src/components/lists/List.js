import React, { Component } from 'react';

class List extends Component {

    render() {

        const list = this.props.list;

        return (
            <main>
                <div className="list" id={list.id}></div>
                <div className="list doing" id={list.id + "doing"}></div>
                <div className="list done" id={list.id + "done"}></div>
            </main>
        )

    }

}

export default List