import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "../node_modules/react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/feed/",
  },
  {
    icon: <FaInstagram />,
    path: "",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
