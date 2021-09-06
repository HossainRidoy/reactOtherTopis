import React, { useState } from 'react'


const Todo2 = () => {

    const [state, setstate] = useState([])
    const [ghjh, setghjh] = useState([0])

    const numArry = (arr) => {
        return arr.reduce((item, index) => item + index)
    }



    const onChange = (e) => {
        let InputValue = e.target.value
        setstate(InputValue)
    }
    const onClick = () => {
     setghjh([...ghjh, state])


    }


    return (

        <div className="py-5">
            <div>
                <input onChange={(e) => onChange(e)} type="number" />
                <button type="button" onClick={onClick}>Add</button>
            </div>

        </div>
    )
}

export default Todo2
