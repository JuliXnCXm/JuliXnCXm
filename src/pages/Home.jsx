import React from 'react'
import About from '../components/About'
import GetInTouch from '../components/GetInTouch'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import TimeLineEducation from '../components/TimeLineEducation'
import TimeLineProfessional from '../components/TimeLineProfessional'

const Home = () => {
    return (
        <>
            <Hero/>
            <About/>
            <Services/>
            <Portfolio/>
            <TimeLineEducation/>
            <TimeLineProfessional/>
            <GetInTouch/>
        </>
    )
}

export default Home