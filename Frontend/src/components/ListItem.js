import React from 'react'

function ListItem({note}) {
    return (
        <div>
            <h2>{note.title}</h2>
            <h3>{note.body}</h3>
        </div>
    )
}

export default ListItem;
