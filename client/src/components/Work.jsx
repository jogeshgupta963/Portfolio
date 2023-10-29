import React from "react";
import { colours } from "../assets/colors";
import project from "../assets/project.jpeg";
import ProjectList from "./ProjectList";
import ecommerce from "../assets/e-commerce.svg";
import krishiSeva from "../assets/krishi-seva.svg";
import chat from "../assets/chat.svg";
function Work() {
    const projects = [
        {
            name: "Tics",
            img: ecommerce,
            tech: "Microservices",
            demo: "disabled",
            code: "https://github.com/jogeshgupta963/Tics",
        },
        {
            name: "Auctions",
            img: krishiSeva,
            tech: "Serverless",
            demo: "disabled",
            code: "https://github.com/jogeshgupta963/Auctions",
        },
        {
            name: "ChatApp",
            img: chat,
            tech: "MERN,Socket",
            demo: "https://www.google.com",
            code: "https://github.com/jogeshgupta963/ChatApp",
        },
    ];
    return (
        <div name="work" className={`w-full md:h-screen text-gray-300`}>
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
                {/* <div className="pb-8"> */}
                {/* <div> */}
                {/* <p className="text-4xl mb-5 font-bold inline border-b-4 text-center items-center justify-center mb-5  border-pink-600 ">
            Works
          </p> */}
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#3b82f6]">
                        Works
                    </p>
                </div>
                {/* grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-10 ">
                    {projects.map((project) => (
                        <ProjectList projects={project} />
                    ))}
                </div>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Work;
