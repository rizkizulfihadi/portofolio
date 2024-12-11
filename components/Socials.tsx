import Link from "next/link";

import { FaGithub, FaLinkedin, FaMediumM } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, path: "www.linkedin.com/in/rizki-zulfihadi" },
  { icon: <FaGithub />, path: "https://github.com/rizkizulfihadi" },
  { icon: <FaMediumM />, path: "https://medium.com/@rizkizulfihadi17" },
];

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles?: string;
  iconStyles?: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
