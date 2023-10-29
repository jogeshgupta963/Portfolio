import React from "react";

function ProjectList({ projects }) {
    return (
        <div
            style={{
                backgroundImage: `url(${projects.img})`,
                backgroundSize: "cover",
            }}
            className="shadow-lg shadow-[#18181b] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
            {/* hover  */}
            <div className="opacity-0 group-hover:opacity-80">
                <span className="text-2xl mx-5 font-bold text-center text-white tracking-wider">
                    {projects.name}
                </span>
                <br />
                <span className="text-2xl mx-5 font-bold text-center text-white tracking-wider">
                    Tech:{projects.tech}
                </span>
                <div className="pt-8 text-center">
                    <a href={projects.demo}>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                            className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg disabled"
                        >
                            Demo
                        </button>
                    </a>
                    <a href={projects.code} target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectList;
