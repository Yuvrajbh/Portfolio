import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i class='bx bx-award about__icon'></i>
        <h3 className='about__title'>Experience</h3>
        <span className='about__subtitle'>
          Undergraduate <br />
          (PreFinal Year) <br />
          Intern at  <br />
          <span style={{fontWeight:"bolder" , color:"#096B90"}}>Expedia Group</span>
        </span>
      </div>

      <div className='about__box'>
        <i class='bx bx-briefcase about__icon'></i>
        <h3 className='about__title'>Completed</h3>
        <span className='about__subtitle'>12+ Projects</span>
      </div>

      <div className='about__box'>
        <i class='bx bx-support about__icon'></i>
        <h3 className='about__title'>Connect</h3>
        <span className='about__subtitle'>
          Anytime
          <br />
          (Excluding College hours)
        </span>
      </div>
    </div>
  )
}

export default Info