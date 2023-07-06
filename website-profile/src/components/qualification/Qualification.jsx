import React, { useState } from 'react';
import "./qualification.css"

const Qualification = ()=> {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button qualification__active button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button qualification__active button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>


        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content "}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full-Stack Web Development</h3>
                <span className="qualification__subtitle">Le Wagon Bootcamp</span>
                <div className="qualification__subtitle">
                  <i className="uil uil-calendar-alt"></i> 2023
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
              </div>

              <div>
                <h3 className="qualification__title">MSc Management</h3>
                <span className="qualification__subtitle">Bayes Business School</span>
                <div className="qualification__subtitle">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BA Development Economics</h3>
                <span className="qualification__subtitle">King's College London</span>
                <div className="qualification__subtitle">
                  <i className="uil uil-calendar-alt"></i> 2019
                </div>
              </div>



              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>



              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">A-Levels</h3>
                <span className="qualification__subtitle">dsdsdsddsdsds dsd</span>
                <div className="qualification__subtitle">
                  <div className="div qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Test
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Investment Banking Advisory - Analyst</h3>
                <span className="qualification__subtitle">Delta Capita</span>
                <div className="qualification__subtitle">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
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
              </div>

              <div>
                <h3 className="qualification__title">M&A - Analyst</h3>
                <span className="qualification__subtitle">Bitcoin.com / FMFW   </span>
                <div className="qualification__subtitle">
                  <div className="div qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                  </div>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Venture Capital Analyst</h3>
                <span className="qualification__subtitle">Osun Capital </span>
                <div className="qualification__subtitle">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>



              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification
