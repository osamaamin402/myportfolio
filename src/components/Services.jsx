import React, { useState } from "react";

export default function Services({servicesData}) {
  const [activeModal, setActiveModal] = useState(null);

  const services = servicesData.details;

  return (
    <section className="services section" id="services">
      <h2 className="section__title">{servicesData.title}</h2>
      <span className="section__subtitle">{servicesData.subTitle}</span>

      <div className="services__container container grid">
        {services.map((service, index) => (
          <div className="services__content" key={index}>
            <div>
              <i className={service.icon}></i>
              <h3 className="services__title">{service.title}</h3>
            </div>
            <span
              className="button button--flex button--small button--link services__button"
              onClick={() => setActiveModal(index)}
            >
              View more
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            {/* Modal */}
            <div
              className={`services__modal ${activeModal === index ? "active-modal" : ""
                }`}
            >
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  {service.title}
                  <br />
                </h4>
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => setActiveModal(null)}
                ></i>

                <ul className="services__modal-services grid">
                  {service.details.map((detail, idx) => (
                    <li className="services__modal-service" key={idx}>
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
