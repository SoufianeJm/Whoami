import React, {useState} from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState , setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    }

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="bx bx-book-alt qualification__icon"></i>
                     Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="bx bx-briefcase-alt qualification__icon"></i>
                     Experience
                </div>
            </div>


            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">

                        <div>
                            <h3 className="qualification__title">Computer Science</h3>
                            <span className="qualification__subtitle">Morocco - EMSI</span>
                            <div className="qualification__calendar">
                                <i className="bx bx-calendar-alt"></i> 2020 - Present
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
                            <h3 className="qualification__title">Baccalaureate </h3>
                            <span className="qualification__subtitle">Morocco - Bno Yasmin</span>
                            <div className="qualification__calendar">
                                <i className="bx bx-calendar-alt"></i> 2019 - 2020
                            </div>
                        </div>

                    </div>
                </div>


                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">

                        <div>
                            <h3 className="qualification__title">Software engineer (intern)</h3>
                            <span className="qualification__subtitle">Morocco - ilemgroup</span>
                            <div className="qualification__calendar">
                                <i className="bx bx-calendar-alt"></i> 2023
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
                            <h3 className="qualification__title">Front end Developer</h3>
                            <span className="qualification__subtitle">Morocco - Freelance</span>
                            <div className="qualification__calendar">
                                <i className="bx bx-calendar-alt"></i> 2019 - present
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>

    </section>
  )
}

export default Qualification