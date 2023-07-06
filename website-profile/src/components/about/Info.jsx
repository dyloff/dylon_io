import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">

      <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>

        <h3 className="about__title">Interests</h3>
        <span className="about__subtitle">FinTech, HealthTech, PropTech</span>
      </div>

      <div className="about__box">
        <i class='bx bx-cross about__icon' ></i>

        <h3 className="about__title">LF Opportunities</h3>
        <span className="about__subtitle">Full time - Remote or Office</span>
      </div>

      <div className="about__box">
         <i class='bx bx-bowl-hot about__icon'></i>

        <h3 className="about__title">Main Stack</h3>
        <span className="about__subtitle">Rails, JS, SCSS, PostgreSQL</span>
      </div>

    </div>
  )
}

export default info
