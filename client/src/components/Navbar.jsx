import React, { useState } from "react";
import resume from "../assets/Jogesh_Resume.pdf";
import {
    FaBars,
    FaTimes,
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaGithub,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.svg";
import { colours } from "../assets/colors";
import { Link } from "react-scroll";
function Navbar() {
    const [nav, setNav] = useState(false);

    return (
        <div
            className={`fixed w-full h-[80px] flex justify-between items-center px-4  text-white`}
        >
            <div className="text-4xl hover:cursor-pointer ">
                <Link to="home" smooth={true} offset={50}>
                    {/* <img
          src={Logo}
          alt="logo"
          className="h-8"
          style={{
            width: '50px',
          }}
        /> */}
                    Portfo<span className="text-[#88edff]">lio</span>
                </Link>
            </div>
            {/* menu */}

            <ul className="hidden md:flex">
                <li className="group">
                    <Link
                        className="group-hover:border-[#3b82f6] font-bold text-5lg group-hover:bg-[#3b82f6]
            p-4 rounded-lg
            "
                        to="home"
                        smooth={true}
                        offset={50}
                    >
                        Home
                    </Link>
                </li>
                <li className="group">
                    <Link
                        className="group-hover:border-[#3b82f6] font-bold text-5lg group-hover:bg-[#3b82f6]
            p-4 rounded-lg
            "
                        to="about"
                        smooth={true}
                        offset={50}
                    >
                        About
                    </Link>
                </li>
                <li className="group">
                    <Link
                        className="group-hover:border-[#3b82f6] font-bold text-5lg group-hover:bg-[#3b82f6]
            p-4 rounded-lg
            "
                        to="skills"
                        smooth={true}
                        offset={50}
                    >
                        Skills
                    </Link>
                </li>
                <li className="group">
                    <Link
                        className="group-hover:border-[#3b82f6] font-bold text-5lg group-hover:bg-[#3b82f6]
            p-4 rounded-lg
            "
                        to="work"
                        smooth={true}
                        offset={50}
                    >
                        Works
                    </Link>
                </li>
                <li className="group">
                    <Link
                        className="group-hover:border-[#3b82f6] font-bold text-5lg group-hover:bg-[#3b82f6]
            p-4 rounded-lg
            "
                        to="blog"
                        smooth={true}
                        offset={50}
                    >
                        Blogs
                    </Link>
                </li>
                <li className="group">
                    <Link
                        className="group-hover:border-[#3b82f6] font-bold text-5lg group-hover:bg-[#3b82f6]
            p-4 rounded-lg
            "
                        to="achievement"
                        smooth={true}
                        offset={50}
                    >
                        Achievements
                    </Link>
                </li>
                <li className="group">
                    <Link
                        className="group-hover:border-[#3b82f6] font-bold text-5lg group-hover:bg-[#3b82f6]
            p-4 rounded-lg
            "
                        to="contact"
                        smooth={true}
                        offset={50}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* hamburger */}
            <div
                className="md:hidden flex z-15"
                onClick={() => setNav(!nav)}
                style={{
                    marginLeft: "50%",
                }}
            >
                {console.log("nav", nav)}
                {nav ? <FaTimes className="z-20" /> : <FaBars />}
                {/* <FaBars /> */}
            </div>
            {/* mobile menu  */}
            <div>
                <ul
                    className={
                        nav
                            ? `absolute top-0 left-0 w-full h-screen bg-[#262626] flex flex-col justify-center items-center`
                            : "hidden"
                    }
                >
                    <li className="py-6 text-4xl">
                        <Link
                            to="home"
                            onClick={() => setNav(false)}
                            smooth={true}
                            offset={50}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link
                            to="about"
                            onClick={() => setNav(false)}
                            smooth={true}
                            offset={50}
                        >
                            About
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link
                            to="skills"
                            onClick={() => setNav(false)}
                            smooth={true}
                            offset={50}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link
                            to="work"
                            onClick={() => setNav(false)}
                            smooth={true}
                            offset={50}
                        >
                            Works
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link
                            to="contact"
                            onClick={() => setNav(false)}
                            smooth={true}
                            offset={50}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            {/* social icons  */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    {/* linkedin */}
                    <li
                        className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300
          bg-blue-600
          "
                    >
                        <a
                            href="https://www.linkedin.com/in/jogesh-gupta-366876229/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-between items-center w-full text-gray-300  "
                        >
                            Linkedln
                            <FaLinkedin size={30} />
                        </a>
                    </li>
                    {/* Github  */}
                    <li
                        className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300
          bg-[#333333]
          "
                    >
                        <a
                            href="https://github.com/jogeshgupta963"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-between items-center w-full text-gray-300  "
                        >
                            Github
                            <FaGithub size={30} />
                        </a>
                    </li>
                    {/* email  */}
                    <li
                        className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300
          bg-[#6fc2b0]
          "
                    >
                        <a
                            href="mailto:jogeshgupta963@gmail.com"
                            // mailto=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-between items-center w-full text-gray-300  "
                        >
                            Email
                            <HiOutlineMail size={30} />
                        </a>
                    </li>
                    {/* resume  */}
                    <li
                        className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300
          bg-[#565f69]
          "
                    >
                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-between items-center w-full text-gray-300  "
                        >
                            Resume
                            <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
