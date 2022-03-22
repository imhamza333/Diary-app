import React, {useState, useEffect} from 'react'

function Diarypage  ({match})  {

    let diaryId = match.params.id
    console.log('look', diaryId)
    // let [page, setPage] = useState(null)

    // useEffect(() => {
    //     getPage()
    // }, [])


    // let getPage = async () => {
    //     let response = await fetch(`/diary/${diaryId}`)
    //     let data = await response.json()
    //     setPage(data)
    // }

    return (
        <div>
            <p>single page {diaryId}</p>
        </div>
    )
}

export default Diarypage;
