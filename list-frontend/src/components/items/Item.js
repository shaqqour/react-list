import React from 'react';

const Item = ({item}) => {

    if(item.status === "to_do") {
        return (
            <li>
                {item.name}
                <button className="delete" type="submit">Delete</button>
                <button className="doing">Doing</button>
            </li>
        )   
    }
    else {
        if(item.status === "doing") {
            return (
                <li>
                    {item.name}
                    <button className="done">Done</button>
                </li>
            )
        }
    }

}

export default Item