import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookSquare } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "facebook",
    icon: <FaFacebookSquare />,
    url: "https://www.facebook.com/bank.kak.5",
  },
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/nathachai-rungsaeng-3a1b2023a/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    url: "https://github.com/nathachai13011997",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/nathachairungsaeng/",
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.url}
          className="social-btn"
          id={network.name}
          key={network.name}
          target="_blank"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
