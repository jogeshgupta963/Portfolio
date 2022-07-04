import React, { useState } from 'react'
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaGithub,
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.svg'
import { colours } from '../assets/colors'
function Navbar() {
  const [nav, setNav] = useState(false)

  return (
    <div
      className={`fixed w-full h-[80px] flex justify-between items-center px-4  text-gray-300`}
    >
      <div>
        <img
          src={Logo}
          alt="logo"
          className="h-8"
          style={{
            width: '50px',
          }}
        />
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <div
        className="md:hidden z-10"
        onClick={() => setNav(!nav)}
        style={{
          marginLeft: '90%',
        }}
      >
        {nav ? <FaTimes /> : <FaBars />}
        {/* <FaBars /> */}
      </div>
      {/* mobile menu  */}
      <div>
        <ul
          className={
            nav
              ? `absolute top-0 left-0 w-full h-screen bg-[${colours.themeColor}] flex flex-col justify-center items-center`
              : 'hidden'
          }
        >
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Works</li>
          <li className="py-6 text-4xl">Contact</li>
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
              href="https://www.linkedin.com/in/james-kim-b8a8b817b/"
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
              href="https://www.linkedin.com/in/james-kim-b8a8b817b/"
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
              href="https://www.linkedin.com/in/james-kim-b8a8b817b/"
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
              href="https://www.linkedin.com/in/james-kim-b8a8b817b/"
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
  )
}

export default Navbar
