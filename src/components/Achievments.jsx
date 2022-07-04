import React from 'react'
import project from '../assets/project.jpeg'
import ProjectList from './ProjectList'
import gdsc from '../assets/gdsc.pdf'
import gdscImg from '../assets/gdscImg.jpg'
import hacko from '../assets/hacko4.1.pdf'
import hackoImg from '../assets/hacko.jpg'
import makeathon from '../assets/makeathon.png'
import nvidia from '../assets/nvidiaImg.jpg'
import AchiementList from './AchiementList'

function Achievments() {
  const achievements = [
    {
      name: 'DV hackathon',
      img: gdscImg,
      tech: 'By GDSC Thapar',
      certificate: gdsc,
    },
    {
      name: 'Hackowasp4.1',
      img: hackoImg,
      tech: 'By Owasp Thapar',
      certificate: hacko,
    },
    {
      name: 'Make4thon',
      img: makeathon,
      tech: ' By MLSC Thapar',
      demo: 'disabled',
      certificate: makeathon,
    },
    {
      name: 'Accelerated Computing',
      img: nvidia,
      tech: 'By NVIDIA',
      demo: 'https://www.google.com',
      certificate:
        'https://courses.nvidia.com/certificates/d9ae015a8acd4b63be2ce7a65bbf0432/',
    },
  ]
  return (
    <div>
      {' '}
      <div name="achievement" className={`w-full md:h-screen text-gray-300`}>
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
          {/* <div className="pb-8"> */}
          {/* <div> */}
          {/* <p className="text-4xl mb-5 font-bold inline border-b-4 text-center items-center justify-center mb-5  border-pink-600 ">
          Works
        </p> */}
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#3b82f6]">
              Achievments
            </p>
          </div>
          {/* grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-10">
            {achievements.map((achievements) => (
              <AchiementList achievements={achievements} />
            ))}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Achievments
