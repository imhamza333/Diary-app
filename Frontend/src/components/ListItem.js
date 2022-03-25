import React from 'react'
import { Link } from 'react-router-dom'


function ListItem({note}) {
    return (
        <div>
            <Link to={`/diary/${note.id}`}>
                <div className='notes-list-item'>
                    <h2 className="notes-list-item">{note.title}</h2>
                </div>
            </Link>
            <p>{note.body}</p>
        </div>
    )
}

export default ListItem;
