import React, { useState } from 'react'
import Modal from './modal'

const bumodal = [
    {
        id: 1,
        title: "title 1"
    },
    {
        id: 2,
        title: "title 2"
    }
]


const BuModal = () => {

const [state, setstate] = useState(null)

    const modalData=(item)=>{
        setstate(item)
    }


    return (
        <div className="py-5">
            {bumodal.map((item, index) => (
                <div key={index}>
                    <button type="button" className="btn btn-primary" onClick={()=>modalData(item)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Launch static backdrop modal
                    </button>
                    {/* <Modal title={item.title} /> */}
                </div>
            ))}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {state && state.title}
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default BuModal
