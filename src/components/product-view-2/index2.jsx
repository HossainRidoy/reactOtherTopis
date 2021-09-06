import React, { useState } from 'react'




const Index2 = (props) => {



    const [reletedItem, setreletedItem] = useState(null)

    let releteI = props.reletedItem

    let imgview = releteI[0]

    const imgsrvvalue = (item) => {
        setreletedItem(item)

    }


    return (

        <div>
            <div>
                <img className="img-fluid" src={reletedItem ? reletedItem:imgview} alt="" />
            </div>

            <div className="d-flex justify-content-between mt-3">

                {releteI && releteI.length > 0 && releteI.map((ritem, index) => (
                    <div key={index} onClick={() => imgsrvvalue(ritem)} className="me-2">
                        <img className="img-fluid" src={ritem} alt="" />
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Index2
