import React, { useState, useEffect } from 'react'



const Description = (props) => {

    const [isLess, setIsLess] = useState(true)
    const [data, setData] = useState()


    useEffect(() => {
        let stringToArray = props.data.split('').slice(0, 90).join("");
        setData(stringToArray)

    }, [isLess])



    const showMore = () => {
        setIsLess(!isLess)
    }

    return (
        <>
            {isLess ? (<>
                <p>{data}...</p>
                <button onClick={() => showMore()}>More</button>
            </>) : (<>
                <p>{props.data}</p>
                <button onClick={() => showMore()}>less</button>
            </>)}

        </>

    )
}

export default Description
