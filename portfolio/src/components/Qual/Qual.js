import React, { useState } from 'react'
import './Qual.css'
const Qual = () => {
    const [toggleState, setToggleState] = useState(0)
    const toggleTab = index => {
        setToggleState(index)
    }

    return (
        <section className='qualification section'>
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My Personal journey</span>

            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    <div
                        className={
                            toggleState === 1
                                ? 'qualification__button qualification__active button--flex'
                                : 'qualification__button button--flex'
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className='uil uil-book-reader qualification__icon'></i>
                        Education
                    </div>
                    <div
                        className={
                            toggleState === 2
                                ? 'qualification__button qualification__active button--flex'
                                : 'qualification__button button--flex'
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className='uil uil-briefcase-alt qualification__icon'></i>
                        Experience
                    </div>
                </div>

                <div className='qualification__sections'>
                    <div
                        className={
                            toggleState === 1
                                ? 'qualification__content qualification__content-active'
                                : 'qualification__content'
                        }
                    >
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>10th CBSE (98.3%)</h3>
                                <span className='qualification__subtitle'>
                                    Blue Bells Public School , Gurugram
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>05/2018 - 04/2019
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>12th CBSE (92.66%)</h3>
                                <span className='qualification__subtitle'>
                                    Navyug Convent School ,Delhi
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>04/2019 - 05/2021
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                        
                            <div>
                                <h3 className='qualification__title'>
                                    B.E. (Computer Engineering)
                                </h3>
                                <span className='qualification__subtitle'>
                                    Thapar Institute Of Engineering And Technology
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? 'qualification__content qualification__content-active'
                                : 'qualification__content'
                        }
                    >
                     <div className='qualification__data'>
                            
                            <div>
                                <h3 className='qualification__title'>Web Devloper [Bevzilla]</h3>
                                <span className='qualification__subtitle'>
                                    Software Developer Intern
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>06/2022-08/2022
                                </div>  
                                </div>     
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            
                        </div>
                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>SDE Intern [Expedia]</h3>
                                <span className='qualification__subtitle'>
                                    Software Developer Intern
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>06/2024-08/2024
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qual