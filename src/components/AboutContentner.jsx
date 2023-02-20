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

      <h2>Work History</h2>
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
        Innovisor Tech<br />{" "}
        <span style={{ marginLeft: "20px" }}>Position Full Stack</span> <br />
        <span>February 15, 2021 to August 18, 2022</span>
        <br />
        <li style={{ marginLeft: "20px" }}>work as assigned Responsible for deployCode, support team members Find solutions, make central components, explain how to use the components that you create for the team, fix various bugs, etc</li>
        <li style={{ marginLeft: "20px" }}>Have the opportunity to do ETL in Staging , Store, MasterData, Fact, CUBE and report with Power BI.</li>
        <li style={{ marginLeft: "20px" }}>Have the opportunity to study online ethereum developer zero to hero Nattapon Nimakul (Tot) of the company.</li>
        <li style={{ marginLeft: "20px" }}>Have the opportunity to study online ETL With Microsoft SQL Integration Services (SSIS) of the company.</li>
      </p>
    </section>
  );
};

export default AboutContentner;
