import React, {useState, useEffect} from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { Link } from 'react-router-dom';


function Diarypage  ({match, history})  {

  
    let diaryId = match.params.id
    console.log('look', diaryId)
    let [page, setPage] = useState(null)

    useEffect(() => {
        getPage()
    }, [diaryId])

    let updatePage = async () => {
        fetch(`/api/blogs/${diaryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(page)
        })
    }

    let  handleSubmit = () => {
        updatePage()
        history.push('/')
    }


    let getPage = async () => {
        let response = await fetch(`/api/blogs/${diaryId}`)
        let data = await response.json()
        setPage(data)
    }

    // let handleChange = (value) => {
    //     getPage(note => ({ ...note, 'body': value }))
    //     // console.log('Handle Change:', note)
    // }

    return (
        <div className="note">
            <div className='note-header'>
            <h1>{page?.title}</h1>
                <h3>
                    <ArrowLeft  onClick={handleSubmit}/>
                </h3>
            </div>
            
            <textarea onChange={(e) => {setPage({...page, 'body': e.target.value})}} defaultValue={page?.body}></textarea>
            {/* <textarea onChange={(e) => { handleChange(e.target.value) }} value={page?.body}></textarea> */}
            {/* <p>{page?.body}</p> */}
        </div>
    )
}

export default Diarypage;
