import React from 'react'
import Image1 from "../../assets/images/1.jpg"
import Image2 from "../../assets/images/2.jpg"


import Description from './Description'

const moreList = [
    {
        id: 1,
        photo: Image1,
        words: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 2,
        photo: Image2,
        words: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now us"
    },
]


const More_less = () => {




    return (
        <div className="py-5 bg-light">
            <div className="row">
                {moreList.map((item, index) => {
                    return (
                        <div key={index} className="col-3 mx-auto ">
                           <div className="border bg-white">
                           <img className="img-fluid" src={item.photo} alt="" />
                            <div className="p-2">
                            <div className="py-3">{<Description data={item.words} />}</div>
                            </div>
                           </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default More_less
