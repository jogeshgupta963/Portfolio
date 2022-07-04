import React from 'react'
import { colours } from '../assets/colors'
import project from '../assets/project.jpeg'
import ProjectList from './ProjectList'

function Work() {
  const projects = [
    {
      name: 'Project 1',
      img: project,
      tech: 'React, Node, Express, MongoDB',
      demo: 'https://www.google.com',
      code: 'https://www.google.com',
    },
    {
      name: 'Project 2',
      img: project,
      tech: 'React, Node, Express, MongoDB',
      demo: 'https://www.google.com',
      code: 'https://www.google.com',
    },
    {
      name: 'Project 3',
      img: project,
      tech: 'React, Node, Express, MongoDB',
      demo: 'https://www.google.com',
      code: 'https://www.google.com',
    },
    {
      name: 'Project 4',
      img: project,
      tech: 'React, Node, Express, MongoDB',
      demo: 'https://www.google.com',
      code: 'https://www.google.com',
    },
  ]
  return (
    <div name="work" className={`w-full md:h-screen text-gray-300`}>
      <div className="max-w-[10000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 ">
            Work
          </p>
          <p className="py-6">Checkout out some of my recent works</p>
          {/* grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {projects.map((project) => (
              <ProjectList projects={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
