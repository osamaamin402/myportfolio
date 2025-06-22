import React, { useState } from "react";

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);

  const services = [
    {
      icon: "uil-server skills__icon",
      title: "Java Developer",
      details: [
        "Developed responsive UIs using React JS.",
        "Built RESTful APIs with Spring Boot and Java.",
        "Implemented microservices architecture.",
        "Worked with MySQL, JPA, and Hibernate.",
      ],
    },
    {
      icon: "uil uil-react skills__icon",
      title: "React.JS",
      details: [
        "Built dynamic user interfaces using React.",
        "Managed state with useState, useContext, and Redux.",
        "Worked with component-based architecture.",
        "Integrated REST APIs and optimized performance.",
      ],
    },
    {
      icon: "uil uil-brackets-curly services__icon",
      title: "Web Developer",
      details: [
        "Built responsive UIs with ReactJS.",
        "Integrated RESTful APIs and managed state.",
        "Developed backend with Java and Spring Boot.",
        "Followed clean code and MVC design patterns.",
      ],
    }, {
      icon: "uil uil-server-network skills__icon",
      title: "Microservices",
      details: [
        "Built scalable services using Spring Boot.",
        "Implemented REST APIs and service discovery.",
        "Worked with Docker and container orchestration.",
        "Managed inter-service communication and security.",
      ],
    },
    {
      icon: "uil uil-exchange skills__icon",
      title: "RESTful API Developer",
      details: [
        "Designed RESTful APIs using Spring Boot.",
        "Used HTTP methods: GET, POST, PUT, DELETE.",
        "Followed REST constraints: stateless, cacheable, uniform interface.",
        "Secured APIs using JWT and Spring Security.",
      ]
    },
  ];

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

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
