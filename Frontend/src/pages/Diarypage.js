import React, {useState, useEffect} from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';


function Diarypage  ({match, history})  {

  
    let diaryId = match.params.id
    let [page, setPage] = useState(null)
    


    useEffect(() => {
        getPage()
    }, [diaryId])

    let getPage = async () => {
        if (diaryId === 'new') return 
        let response = await fetch(`/api/blogs/${diaryId}`)
        let data = await response.json()
        setPage(data)
    }
 

    let createPage = async () => {
        fetch(`/api/blogs/create/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(page)
        })
    }

    let updatePage = async () => {
        fetch(`/api/blogs/${diaryId}/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(page)
        })
    }

    let deletePage = async () => {
        fetch(`/api/blogs/${diaryId}/delete/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            } 
        })
        history.push('/')
    }





    let handleSubmit = () => {
        console.log('NOTE:', page)
        if (diaryId !== 'new' && page.body == '') {
            deletePage()
        } else if (diaryId !== 'new') {
            updatePage()
        } else if (diaryId == 'new' && page.body !== null) {
            createPage()
        }
        history.push('/')
    }

    let handleChange = (value) => {
        setPage(page => ({ ...page, 'body': value }))
        console.log('Handle Change:', page)
    }


    

    return (
        <div className="person">
            {/* <h1>{page?.title}</h1> */}
            <div className='note-header'>
                <h3>
                    <ArrowLeft  onClick={handleSubmit}/>
                </h3>

                {diaryId !== 'new' ?(
                    <button onClick={deletePage}>Delete</button>
                ):(
                    <button onClick={handleSubmit}>Save</button>
                )
            
            }
            </div>
            <textarea 
                className='textarea1'  
                onChange={(e) => { handleChange(e.target.value) }} value={page?.body}
                placeholder="What's in your mind..">
            </textarea>
            {/* <p>letter count : {count}</p> */}
            
        </div>
    )
}

export default Diarypage;





