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
        <div>
            <div className='notes-list'>
                {Diary.map((note, index) => (
                    <ListItem key={index} note={note}/>
                ))}
            </div>
        </div>
    )
}

export default  DiaryListPage;
