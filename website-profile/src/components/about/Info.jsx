import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">

      <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>

        <h3 className="about__title">Interests</h3>
        <span className="about__subtitle">FinTech Health/PropTech</span>
      </div>

      <div className="about__box">
        <i class='bx bx-cross about__icon' ></i>

        <h3 className="about__title">LF Open Roles</h3>
        <span className="about__subtitle">Full time only Remote or Office</span>
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
