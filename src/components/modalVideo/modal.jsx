import React, { useState } from 'react'

import ModalVideo from 'react-modal-video'

const Modal = (props) => {

    let video = props.link
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <button className="btn-primary" onClick={() => setOpen(true)}>Modal Youtube Demo</button>
            <React.Fragment>
                <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId={video} onClose={() => setOpen(false)} />
            </React.Fragment>
        </div>
    )
}

export default Modal
