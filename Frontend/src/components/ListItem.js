import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Card } from "react-bootstrap";


function ListItem({note}) {

    let getTime = (note) => {
        return new Date(note.updated).toLocaleDateString()
    }
    
    let getTitle = (note) => {
    
        let title = note.body.split('\n')[0]
        if (title.length > 45) {
            return title.slice(0, 45)
        }
        return title
    }
    

    let getContent = (note) => {
        let title = getTitle(note)
        let content = note.body.replaceAll('\n', ' ')
        content = content.replaceAll(title, '')
    
        if (content.length > 45) {
            return content.slice(0, 45) + '...'
        } else {
            return content
        }
    }

    // const myFunction = (e) => {
    //     e.preventDefault();
    //     console.log('clicked');
    //   };

    const [text, setText] = useState(0);

    return (
        <Card className="person">
            <Card.Body >
                <Link to={`/diary/${note.id}`} className="link">
                    <Card.Title >{getTitle(note)}</Card.Title>
                </Link>
                <Card.Text  >{note.body}</Card.Text>
                <Card.Text>Last updated :<strong> {getTime(note)} </strong> </Card.Text>
                <p>Total number of character : <strong>{note.body.length}</strong></p>
            </Card.Body>
        </Card>



        // <div>
        //     <Link to={`/diary/${note.id}`}>
        //     <div className="notes-list-item" >
        //         <h3>{getTitle(note)}</h3>
        //         <p>
        //             <span>{getTime(note)}</span>
        //             {/* {getContent(note)} */}
        //         </p>
        //         <p>{note.body}</p>
        //     </div>
        //     </Link>
            
        // </div>

        
    )
}

export default ListItem;
