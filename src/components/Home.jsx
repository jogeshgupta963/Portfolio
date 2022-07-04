import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { colours } from '../assets/colors'
function Home() {
  console.log(colours)
  return (
    <div name="home" className="w-full h-screen ">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* <p className={`text-2xl text-[${colours.secondaryColor}]`}> */}
        {/* <p className={`text-2xl text-[#6d28d9]`}>Hello,My name is </p> */}
        <p className={`text-2xl py-1 text-[#88edff]`}>Hello,My name is </p>
        <h1 className={`text-2xl  sm:text-7xl font-bold text-[#f8fafc]`}>
          Jogesh Gupta
        </h1>
        {/* <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]"> */}
        <h2 className="text-3xl sm:text-7xl font-bold text-[#c7d2fe]">
          I am a <span className="text-[#88edff]"> Full Stack</span> Developer
        </h2>
        <p className="text-2xl  text-[#ccd6f6]   mt-2">
          I am a Web Developer more focused on building scalable
          servers.Currently Learning Blockchain and Cloud
        </p>
        <div>
          <button
            className={`text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#3b82f6] hover:border-[#3b82f6]  hover:font-bold `}
          >
            <Link to="work" smooth={true} offset={50}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={15} className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
