import React, {useState, useEffect} from 'react';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';

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
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">Total Diaries: {Diary.length}</p>
            </div>

            <div className="notes-list">
                {Diary.map((note, index) => (
                    <ListItem key={index} note={note} />
                ))}
            </div>
            <AddButton />
        </div>
    )
}

export default  DiaryListPage;
