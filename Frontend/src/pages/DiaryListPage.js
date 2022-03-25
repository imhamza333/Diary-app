import React, {useState, useEffect} from 'react';
import ListItem from '../components/ListItem';

function DiaryListPage() {

    let [Diary, setDiary] = useState([])

    useEffect(() => {
        getDiarys()
    }, [])


    let getDiarys = async () => {
        let response = await fetch('api/blogs/')
        let data = await response.json()
        // console.log('data: ', data)
        setDiary(data)
    }

    return (
        <div className="notes">
            <div className='notes-header'>
                <h2 className='notes-title'>&#9782; Diary</h2>
                <p className="notes-count">{Diary.length}</p>
            </div>
            <div className='notes-list'>
                {Diary.map((note, index) => (
                    <ListItem key={index} note={note}/>
                ))}
            </div>
        </div>
    )
}

export default  DiaryListPage;
