import React from "react";

const AboutContentner = () => {
  return (
    <section className="about-container">
      <h2>About Me</h2>
      <p>
        Born 13/01/1997 Nickname Bank, 26 years old. I work as Dev Full Stack.
        Likes to work in a team, has curiosity, enthusiasm, has patience.
        Responsible for assigned work
      </p>
      <h2>Study</h2>
      <p>
        Rajamangala University of Technology Bangkok <br />
        Faculty of Business Administration <br />
        Information Systems Branch <br />
        GPA 2.76
      </p>
      <h2>Work Experience</h2>
      <p>
        24 Fix <br />{" "}
        <span style={{ marginLeft: "20px" }}>Position Full Stack</span> <br />
        <span>August 22, 2022 to present</span>
        <br />
        <li style={{ marginLeft: "20px" }}>work assigned</li>
        <li style={{ marginLeft: "40px" }}>support user. ( app mobile )</li>
        <li style={{ marginLeft: "40px" }}>
          {" "}
          Modify the code to work better and better.
        </li>
        <li style={{ marginLeft: "40px" }}>
          {" "}
          Have the opportunity to create a chat. (in the mobile app section)
        </li>
        <li style={{ marginLeft: "20px" }}>
          buy the codemobiles React-Native Programming course.
        </li>
      </p>
      <p>
        Innovisor Tech
        <br /> <span style={{ marginLeft: "20px" }}>
          Position Full Stack
        </span>{" "}
        <br />
        <span>February 15, 2021 to August 18, 2022</span>
        <br />
        <li style={{ marginLeft: "20px" }}>
          work as assigned Responsible for deployCode, support team members Find
          solutions, make central components, explain how to use the components
          that you create for the team, fix various bugs, etc
        </li>
        <li style={{ marginLeft: "20px" }}>
          Have the opportunity to do ETL in Staging , Store, MasterData, Fact,
          CUBE and report with Power BI.
        </li>
        <li style={{ marginLeft: "20px" }}>
          Have the opportunity to study online ethereum developer zero to hero
          Nattapon Nimakul (Tot) of the company.
        </li>
        <li style={{ marginLeft: "20px" }}>
          Have the opportunity to study online ETL With Microsoft SQL
          Integration Services (SSIS) of the company.
        </li>
      </p>
      <h2>Git Hub / Work Persona</h2>
      <p>
        <span>Search Channel</span> <br />
        <div id="box-web" style={{ display: "flex" }}>
          <span style={{ marginRight: "5px" }}>web:</span>
          <a href="https://search-channel.vercel.app/" target={"_blank"}>
            https://search-channel.vercel.app/
          </a>{" "}
        </div>
        <div id="box-github" style={{ display: "flex" }}>
          <span style={{ marginRight: "5px" }}>github:</span>
          <a
            href="https://github.com/nathachai13011997/search-channel"
            target={"_blank"}
          >
            https://github.com/nathachai13011997
          </a>
        </div>
      </p>
    </section>
  );
};

export default AboutContentner;
