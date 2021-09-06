import React, { useState } from 'react'

const userInfo = [
    {
        id: 1,
        userId: 123,
        name: "Ridoy",
    },
    {
        id: 2,
        userId: 456,
        name: "Sabug",
    },
]



const Search = () => {

    const [inputTargetValue, setinputTargetValue] = useState()
    const [userInfomation, setuserInfomation] = useState()


    const inputChang = (e) => {
        let inputValue = e.target.value
        setinputTargetValue(inputValue)
 

       if(e.keyCode === 13){
        let filterUser = userInfo.filter((item) => item.userId === parseInt(inputTargetValue))
        setuserInfomation(filterUser[0])
       }
    }

    const button = () => {
        let filterUser = userInfo.filter((item) => item.userId === parseInt(inputTargetValue))
        setuserInfomation(filterUser[0])
        
    }



    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <div className="d-flex">
                            <input onChange={inputChang} onKeyUp={inputChang} className="form-control" type="text" placeholder="Search..." />
                            <button onClick={button} className="btn btn-dark">Search</button>
                        </div>
                    </div>
                </div>
                {userInfomation &&  <div>
                    <p>{userInfomation.userId}</p>
                    <p>{userInfomation.name}</p>
                </div>}
               
            </div>

        </div>
    )
}

export default Search
