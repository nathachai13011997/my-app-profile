import React from "react";

import '../styles/components/technologiescontentner.sass'

const TechnologiesContentner = ({technologias, title}) => {
  return (
    <section className="technologies-container">
      <h2>{title}</h2>
      <div className="technologies-grid">
        {technologias.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContentner;
