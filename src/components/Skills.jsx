import { useState } from "react";

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSkills = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const skillGroups = [
  {
    icon: "uil uil-brackets-curly",
    title: "Programming Languages",
    subtitle: "Strong problem solving",
    skills: [
      { name: "Java", level: "82%", barClass: "skills__java" },
      { name: "C++", level: "76%", barClass: "skills__cpp" },
    ],
  },
  {
    icon: "uil uil-desktop",
    title: "Front End",
    subtitle: "Modern UI development",
    skills: [
      { name: "React JS", level: "85%", barClass: "skills__react" },
      { name: "JSP", level: "72%", barClass: "skills__jsp" },
      { name: "HTML", level: "80%", barClass: "skills__html" },
      { name: "CSS", level: "75%", barClass: "skills__css" },
      { name: "JavaScript", level: "83%", barClass: "skills__js" },
    ],
  },
  {
    icon: "uil uil-server-network",
    title: "Back End",
    subtitle: "Robust Java stack",
    skills: [
      { name: "Spring", level: "81%", barClass: "skills__spring" },
      { name: "Spring Boot", level: "84%", barClass: "skills__springboot" },
      { name: "Spring MVC", level: "78%", barClass: "skills__springmvc" },
      { name: "Spring Data JPA", level: "79%", barClass: "skills__jpa" },
      { name: "Hibernate", level: "80%", barClass: "skills__hibernate" },
      { name: "Microservices", level: "82%", barClass: "skills__microservices" },
      { name: "Spring Data JDBC", level: "73%", barClass: "skills__jdbc" },
      { name: "J2EE", level: "75%", barClass: "skills__j2ee" },
    ],
  },
  {
    icon: "uil uil-database",
    title: "Databases",
    subtitle: "Reliable RDBMS",
    skills: [
      { name: "MySQL", level: "80%", barClass: "skills__mysql" },
      { name: "Oracle", level: "77%", barClass: "skills__oracle" },
    ],
  },
  {
    icon: "uil uil-setting",
    title: "Tools & Technologies",
    subtitle: "DevOps and productivity",
    skills: [
      { name: "RabbitMQ", level: "74%", barClass: "skills__rabbitmq" },
      { name: "Redis Rate Limiter", level: "71%", barClass: "skills__redis" },
      { name: "GitHub", level: "85%", barClass: "skills__github" },
      { name: "GitLab", level: "72%", barClass: "skills__gitlab" },
      { name: "MS Office", level: "78%", barClass: "skills__office" },
    ],
  },
];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        {skillGroups.map((group, index) => (
          <div
            className={`skills__content ${
              activeIndex === index ? "skills__open" : "skills__close"
            }`}
            key={index}
          >
            <div
              className="skills__header"
              onClick={() => toggleSkills(index)}
            >
              <i className={`${group.icon} skills__icon`}></i>
              <div>
                <h1 className="skills__title">{group.title}</h1>
                <span className="skills__subtitle">{group.subtitle}</span>
              </div>
              <i className="uil uil-angle-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
              {group.skills.map((skill, idx) => (
                <div className="skills__data" key={idx}>
                  <div className="skills__titles">
                    <h3 className="skills__name">{skill.name}</h3>
                    <span className="skills__number">{skill.level}</span>
                  </div>
                  <div className="skills__bar">
                    <span
                      className={`skills__percentage ${skill.barClass}`}
                      style={{ width: skill.level }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}