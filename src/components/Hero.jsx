import React from 'react'
import foto from '../assets/foto.jpg'
import '../styles/Hero.css'
import Modal from './Modal'
import ContactForm from './ContactForm'
import Name from './Name'

const Hero = () => {
    const [show, setShow] = React.useState(false)

    const handleClick = () => {
        setShow(true)
    }

    const handleClose= () => {
        setShow(false)
    }

    return (
        <>
            <div className="hero">
                <div className='hero_div'>
                    <Name/>
                    <div className='hero-container'>
                        <img src={foto} alt="" />
                        <div id="badges">
                            <a href="mailto: juliancamilogarciaescobar7@gmail.com">
                            <img src="https://img.shields.io/badge/-julian-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:juliancamilogarciaescobar7@gmail.com" alt="gmail"/>
                            </a>
                            <a href="https://www.linkedin.com/in/camilo-garcia-escobar/">
                            <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
                            </a>
                            <a href="https://twitter.com/julianca_garcia">
                            <img src="https://img.shields.io/badge/Twitter-blue?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter Badge"/>
                            </a>
                        </div>
                        <button className="hero-container__button" onClick={handleClick}>Contact Me</button>
                    </div>
                </div>
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

export default Hero