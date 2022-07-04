import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
function Home() {
  return (
    <div name="home" className="w-full h-screen ">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl text-pink-600">Hello,My name is </p>
        <h1 className="text-3xl sm:text-6xl font-bol text-[#ccd6f6]">
          Jogesh Gupta
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
          I am a Full Stack Developer
        </h2>
        <p className="text-1xl text-[#ccd6f6] py-4 max-w-[700px] mt-2">
          I am a Full-Stack Developer more focused on building scalable
          servers.Currently Learning Blockchain and Cloud
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
            View Work
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
