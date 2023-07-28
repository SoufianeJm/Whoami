import React from 'react';
import "./services.css"

const Services = () => {

  return (
    <section className="services section" id="services">
      <h2 className="section__title">My Specializations</h2>
      <span className="section__subtitle">Licenses & Certifications </span>

      <div className="services__container container grid">

        <div className="services__content">
          <div>
            <i className="bx bxl-python services__icon"></i>
            <h3 className="services__title">
              Python<br /> for Everybody
            </h3>
          </div>

          <a href='https://coursera.org/share/cfb7c04e120b6cc3cb277051215c81c2' className="services__button">
            View Certification
            <i className="bx bx-right-arrow-alt services__button-icon"></i>
          </a>
      
        </div>

        <div className="services__content">
          <div>
            <i className="bx bxs-shield services__icon"></i>
            <h3 className="services__title">
            Cybersecurity <br /> Fundamentals
            </h3>
          </div>

          <a href='https://coursera.org/share/51a8fd80a78f1aeadc57e9df8f3ccd47' className="services__button">
            View Certification
            <i className="bx bx-right-arrow-alt services__button-icon"></i>
          </a>
      
        </div>

        

      </div>
    </section>
  );
};

export default Services;
