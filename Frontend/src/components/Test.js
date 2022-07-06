import React,{useState} from 'react'


function Test() {

    const [count, setCount] = useState(0)
    return (
        <div>
            <textarea onChange={(e) => setCount(e.target.value.length)} placeholder='type here'> 

            </textarea>
            <p>letter count : {count}</p>
            
        </div>
    )
}

export default Test;
