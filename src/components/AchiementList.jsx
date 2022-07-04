import React from 'react'

function AchiementList({ achievements }) {
  return (
    <div
      style={{
        backgroundImage: `url(${achievements.img})`,
        backgroundSize: 'cover',
      }}
      className="shadow-lg shadow-[#18181b] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* hover  */}
      <div className="opacity-0 group-hover:opacity-80">
        <span className="text-2xl mx-5 font-bold text-center text-white tracking-wider">
          {achievements.name}
        </span>
        <br />
        <span className="text-2xl text-black-300 mx-5 font-bold text-center text-white tracking-wider">
          Tech:{achievements.tech}
        </span>
        <div className="pt-8 text-center">
          <a href={achievements.certificate}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg disabled">
              Certificates
            </button>
          </a>
          {/* <a href={projects.code}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
              Code
            </button>
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default AchiementList
