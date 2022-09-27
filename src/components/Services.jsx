import React from 'react'
import '../styles/Services.css'
import code from '../assets/icons/code.svg'
import data from '../assets/icons/data.svg'
import datae from '../assets/icons/datae.svg'

const Services = () => {
    return (
        <div className="servicesSection">
            <h1>My Services</h1>
            <section className="servicesContainer">
                <div className='servicebox'>
                    <img src={code} alt="" />
                    <span>Web Development</span>
                </div>
                <div className='servicebox'>
                    <img src={data} alt="" />
                    <span>Data Science</span>
                </div>
                <div className='servicebox'>
                    <img src={datae} alt="" />
                    <span>Data Engineering</span>
                </div>
            </section>
        </div>
    )
}

export default Services