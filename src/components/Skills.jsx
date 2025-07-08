import { useState } from "react";

export default function Skills({skills}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSkills = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const skillGroups = skills;

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