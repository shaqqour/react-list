import React from 'react';

const Item = ({item, deleteItem, changeToDoing, changeToDone}) => {

    switch (item.status) {

        case "to_do":
            return (
                <li>
                    {item.name}
                    <button className="delete" type="submit" onClick={ () => deleteItem(item.id)}>Delete</button>
                    <button className="doing" onClick={ () => changeToDoing(item.id)}>Doing</button>
                </li>
            )

        case "doing":
            return (
                <li>
                    {item.name}
                    <button className="done" onClick={() => changeToDone(item.id)}>Done</button>
                </li>
            )

        case "done":
            return (
                <li>
                    {item.name}
                    <button className="delete" onClick={() => deleteItem(item.id)}>Delete</button>
                </li>
            )

        default :
            return null

    }

}

export default Item