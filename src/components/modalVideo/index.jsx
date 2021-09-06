import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import Modal from './modal'

const youtubes = [
    {
        id: 1,
        youtube: "VBk-nzpwr6Y"
    },
    {
        id: 2,
        youtube: "BBS7Md2SjEs"
    }
]



const ModalVideos = () => {



    const [isOpen, setOpen] = useState(false)



    return (
        <div className="py-5">
           
            {youtubes.map((item,index) => (
                <div key={index} className="py-2">
                   <Modal link={item.youtube}/>
                </div>
            ))}

        </div>
    )
}

export default ModalVideos
