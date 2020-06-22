import React from 'react';

const Item = ({item, deleteItem}) => {

    switch (item.status) {

        case "to_do":
            return (
                <li>
                    {item.name}
                    <button className="delete" type="submit" onClick={ () => deleteItem(item.id)}>Delete</button>
                    <button className="doing">Doing</button>
                </li>
            )

        case "doing":
            return (
                <li>
                    {item.name}
                    <button className="done">Done</button>
                </li>
            )

        case "done":
            return (
                <li>
                    {item.name}
                    <button className="delete">Delete</button>
                </li>
            )

        default :
            return null

    }

}

export default Item