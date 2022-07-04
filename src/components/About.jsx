import React from 'react'
import { colours } from '../assets/colors'
function About() {
  return (
    <div name="about" className={`w-full h-screen  text-gray-300 `}>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
          <div className="max-w-[1000px] px-4 w-full sm:grid grid-cols-1  gap-8">
            <div className="sm:text-right text-4xl font-bold ">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
                aliquam!
              </p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              quo ipsa harum ducimus vero reprehenderit aliquam sit illo,
              architecto animi a, numquam dolorem error repellendus veritatis
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
