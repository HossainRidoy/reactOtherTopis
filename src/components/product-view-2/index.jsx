import React, { useState } from 'react'
import Image1 from "../../assets/images/1.jpg"
import Image2 from "../../assets/images/2.jpg"
import Image3 from "../../assets/images/3.jpg"
import Image4 from "../../assets/images/4.jpg"
import Image5 from "../../assets/images/5.jpg"

import Index2 from './index2'




const shahriyars = [
    {
        id: 1,
        name: "abc",
        photo: Image2,
        reletedPhote: [Image2, Image1, Image3, Image4, Image5]
    },
    {
        id: 2,
        name: "def",
        photo: Image5,
        reletedPhote: [Image5, Image2, Image3, Image4, Image1]
    },
    {
        id: 3,
        name: "def",
        photo: Image4,
        reletedPhote: [Image4, Image2, Image3, Image5, Image1]
    },
]


const Product_view = () => {



    return (
        <div className="py-5">
            <div className="row m-0">

                {shahriyars && shahriyars.length > 0 && shahriyars.map((item, index) => (
                    <div key={index} className="col-3 mx-auto">
                        <div className="border">
                                <Index2  reletedItem={item.reletedPhote}/>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Product_view
