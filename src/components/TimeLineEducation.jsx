import React from 'react'
import '../styles/TimeLine.css'
import Data from '../assets/Mock.js'


const TimeLineEducation = () => {
    return (
        <div className='timeline'>
            <h1>Education</h1>
            <div className="flex-parent">
                <div className="input-flex-container">
                    {Object.getOwnPropertyNames(Data.experience.academic).map(key => {
                        return (
                            <>
                                <input type="radio" name="timeline-dot" data-description={key} />
                                <div class="dot-info" data-description={key}>
                                    <span class="year">{Data.experience.academic[key].year}</span>
                                    <span class="label">{Data.experience.academic[key].label}</span>
                                </div>
                            </>
                        )
                    })}
                    <div id="timeline-descriptions-wrapper">
                        {Object.getOwnPropertyNames(Data.experience.academic).map(key => {
                            return (
                                <p data-description={key}>{Data.experience.academic[key].description}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeLineEducation