import React, { useState } from 'react'

import Image1 from "../../assets/images/1.jpg"
import Image2 from "../../assets/images/2.jpg"
import Image3 from "../../assets/images/3.jpg"
import Image4 from "../../assets/images/4.jpg"
import Image5 from "../../assets/images/5.jpg"
import Prod from './prod'





const products = [
    {
        id: 1,
        photo: Image1,
        title: "title 1",
        reletedProducts: [
            {
                id: 1,
                photo: Image1,
                title: "title 1",
            },
            {
                id: 2,
                photo: Image2,
                title: "title 2",
            },
            {
                id: 3,
                photo: Image3,
                title: "title 3",
            },
            {
                id: 4,
                photo: Image4,
                title: "title 4",
            },
            {
                id: 5,
                photo: Image5,
                title: "title 5",
            },
        ]
    },
    {
        id: 2,
        photo: Image5,
        title: "title 1",
        reletedProducts: [
            {
                id: 1,
                photo: Image5,
                title: "title 1",
            },
            {
                id: 2,
                photo: Image4,
                title: "title 2",
            },
            {
                id: 3,
                photo: Image3,
                title: "title 3",
            },
            {
                id: 4,
                photo: Image2,
                title: "title 4",
            },
            {
                id: 5,
                photo: Image1,
                title: "title 5",
            },
        ]
    }
]

const Products = () => {


 

 



    return (
        <section className="py-5">
            <div className="row">

                {products.map((item, index) => (
                    <div key={index} className="col-4">


                            <Prod picc={item.photo} titt={item.title} reletedItem={item.reletedProducts} />
                                

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Products
