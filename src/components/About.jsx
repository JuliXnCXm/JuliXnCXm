import React from 'react'
import Data from '../assets/Mock.js'
import  '../styles/About.css'
import Skills from './Skills.jsx'

const About = () => {
    const [data, setData] = React.useState({})
    const [isWeb, setisWeb] = React.useState(false)


    React.useEffect(() => {
        let btnW = document.getElementById('btn-web')
        let btnD = document.getElementById('btn-data')

        if (isWeb === true) {
            setData(Data.web)
            btnD.style.background = 'none'
            btnW.style.background = '#C4C4C4'
        } else {
            setData(Data.dataScience)
            btnW.style.background = 'none'
            btnD.style.background = '#C4C4C4'
        }
    }, [isWeb])
    return (
        <>
            <div className='about' id="about">
                <div id="about--container">
                    <div className='about--content'>
                        <h1 className='about--content__title'>About Me</h1>
                        <div className='about--content__aboutLine'></div>
                        <p className='about--content__description'>{data.description}</p>
                    </div>
                    <div className='about--buttons'>
                        <button id='btn-web' className="btn" onClick={() => {setisWeb(true)}}>
                            WEB DEVELOPMENT
                        </button>
                        <button id='btn-data' className="btn" onClick={() => {setisWeb(false)}}>
                            DATA SCIENCE
                        </button>
                    </div>
                </div>
                <div></div>
            </div>
            <Skills skills={data.skills}/>
        </>
    )
}

export default About