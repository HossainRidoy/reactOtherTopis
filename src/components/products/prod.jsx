import React, { useState } from 'react'



const Prod = ({ reletedItem, picc, titt }) => {

    const [pic, setpic] = useState(null)
    const [tit, settit] = useState(null)

    const onclickHandler = (p, t) => {
        setpic(p)
        settit(t)
    }


    return (
        <div className="card">
            <div className="d-flex align-items-center">
                <div className="w-75">
                    <img className="img-fluid" src={pic ? pic : picc} alt="" />
                </div>
                <div className="w-25 p-1">
                    <h3>{tit ? tit : titt}</h3>
                </div>
            </div>
            <div className="d-flex">
                {reletedItem && reletedItem.length > 0 && reletedItem.map((ritem, index) => (
                    <div onClick={() => onclickHandler(ritem.photo, ritem.title)} key={index} className="m-2">
                        <img className="img-fluid" src={ritem.photo} alt="" />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Prod
