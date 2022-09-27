import React from 'react'
import Modal from './Modal'
import '../styles/GetInTouch.css'
import ContactForm from './ContactForm'

const GetInTouch = () => {
    const [show, setShow] = React.useState(false)

    const handleCLick = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <>
            <div className="getIntouch" id="contact">
                <span className="getintouch--icon__left material-icons material-icons-outlined">
                    waving_hand
                </span>
                <div className='getintouch-container'>
                    <h1>Interested to collaborate ?</h1>
                    <h1>Send a signal</h1>
                    <button className="hero-container__button" onClick={handleCLick}>Contact Me
                        <span className="material-icons material-icons-outlined">
                            compare_arrows
                        </span>
                    </button>
                </div>
                <span className="getintouch--icon__right material-icons material-icons-outlined">
                    waving_hand
                </span>
            </div>
            {show ?
                <Modal>
                    <ContactForm handleClose={handleClose}/>
                </Modal>
                : null
            }
        </>

    )
}

export default GetInTouch