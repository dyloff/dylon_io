import React from 'react';
import "./qualification.css"

const Qualification = ()=> {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>


        </div>

        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full-Stack Web Development</h3>
                <span className="qualification_subtitle">Le Wagon Bootcamp</span>
                <div className="qualification_subtitle">
                  <i className="uil uil-calendar-alt"></i>2023
                </div>
              </div>



              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>



                <h3 className="qualification__title">MSc Management</h3>
                <span className="qualification_subtitle">Bayes Business School</span>
                <div className="qualification_subtitle">
                  <i className="uil uil-calendar-alt"></i>2022


                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BA Development Economics</h3>
                <span className="qualification_subtitle">King's College London</span>
                <div className="qualification_subtitle">
                  <i className="uil uil-calendar-alt"></i>2019
                </div>
              </div>



              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>



                <h3 className="qualification__title">Test</h3>
                <span className="qualification_subtitle">Test</span>
                <div className="qualification_subtitle">
                  <i className="uil uil-calendar-alt"></i>Test


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification
