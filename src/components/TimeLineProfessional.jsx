import React from 'react'
import Data from '../assets/Mock.js'
import '../styles/TimeLine.css'

const TimeLineProfessional = () => {
    return (
        <div className='timeline' id="timeline--professional">
            <h1>Professional - Personal</h1>
            <div className="flex-parent">
                <div className="input-flex-container">
                    {Object.getOwnPropertyNames( Data.experience.professional ).map( key => {
                        return (
                            <>
                                <input type="radio" name="timeline-dot" data-description={key} />
                                <div class="dot-info" data-description={key}>
                                    <span class="year">{Data.experience.professional[ key ].year}</span>
                                    <span class="label">{Data.experience.professional[ key ].label}</span>
                                </div>
                            </>
                        )
                    } )}
                    <div id="timeline-descriptions-wrapper">
                        {Object.getOwnPropertyNames( Data.experience.professional ).map( key =>
                        {
                            return (
                                <p data-description={key}>{Data.experience.professional[ key ].description}</p>
                            )
                        } )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeLineProfessional