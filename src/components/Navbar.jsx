import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo3.png";

const navItems = [
  {
    icon: <FaLinkedin size={30} />,
    label: "LinkedIn",
    link: "/",
    bg: "bg-blue-600",
  },
  {
    icon: <FaGithub size={30} />,
    label: "Github",
    link: "/",
    bg: "bg-[#333333]",
  },
  {
    icon: <HiOutlineMail size={30} />,
    label: "Email",
    link: "/",
    bg: "bg-green-600",
  },
  {
    icon: <BsFillPersonLinesFill size={30} />,
    label: "Resume",
    link: "/",
    bg: "bg-gray-500",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full items-center justify-between h-[80px] flex bg-[#0a192f] px-4 text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute left-0 top-0 w-full h-screen bg-[#0a192c] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="fixed top-[35%] -right-[84px]">
        <div className="flex flex-col relative">
          {navItems.map((item) => (
            <NavbarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              link={item.link}
              bg={item.bg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function NavbarItem({ icon, label, link, bg }) {
  return (
    <a
      className={`relative block flex justify-start items-center space-x-4 w-36 h-[60px] hover:-ml-[84px] px-4 space-x-4 duration-300 text-gray-300 ${bg}`}
      href={link}
    >
      {icon} <p>{label}</p>
    </a>
  );
}

export default Navbar;
