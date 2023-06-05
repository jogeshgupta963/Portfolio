import React from 'react'
import { colours } from '../assets/colors'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import react from '../assets/react.svg'
import node from '../assets/nodejs.svg'
import mongo from '../assets/mongo.svg'
import git from '../assets/git.svg'
import postgres from '../assets/postgres.svg'
import java from '../assets/java.svg'
import cpp from '../assets/cpp.svg'
import docker from '../assets/docker.svg'
import redux from '../assets/redux.svg'
import SkillSet from './SkillSet'
function Skills() {
  const arr = [
    {
      img: html,
      name: 'HTML',
    },
    {
      img: css,
      name: 'CSS',
    },
    {
      img: js,
      name: 'JavaScript',
    },
    {
      img: react,
      name: 'React',
    },
    {
      img: redux,
      name: 'Redux Toolkit',
    },
    {
      img: node,
      name: 'NodeJS',
    },
    {
      img: mongo,
      name: 'MongoDB',
    },
    {
      img: git,
      name: 'Git',
    },
    {
      img: postgres,
      name: 'PostgreSQL',
    },
    {
      img: java,
      name: 'Java',
    },
    {
      img: cpp,
      name: 'C++',
    },
    {
      img: docker,
      name: 'Docker',
    },
  ]

  return (
    <div
      name="skills"
      className={`w-full max-h-[1000vh] h-screen text-gray-300`}
    >
      {/* container  */}

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#3b82f6]">
            Skills
          </p>
          {/* <p className="py-4 mr-5">Technologies I have worked with</p> */}
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center gap-1 py-8 ">
          {arr.map((item, index) => {
            return <SkillSet skill={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
