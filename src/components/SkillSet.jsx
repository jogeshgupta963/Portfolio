import React from 'react'

function SkillSet({ skill }) {
  return (
    <div>
      <div className="shadow-md w-[100px] shadow-[#18181b] hover:scale-110 duration-150">
        <img className="mx-auto" src={skill.img} alt="html icon" />
        <p>{skill.name}</p>
      </div>
    </div>
  )
}

export default SkillSet
