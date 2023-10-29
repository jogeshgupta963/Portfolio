import React from "react";
import { colours } from "../assets/colors";
import project from "../assets/project.jpeg";
import ProjectList from "./ProjectList";
import ecommerce from "../assets/e-commerce.svg";
import monitoringImg from "../assets/ServerMonitoringDashboard.jpg";
import MobyLogo from "../assets/Moby-logo.png";
import arc from "../assets/Serverless-Functions-vs-Microservices.png";
import dockerCompose from "../assets/docker-compose-logo.webp";
import krishiSeva from "../assets/krishi-seva.svg";
import chat from "../assets/chat.svg";
import BlogList from "./BlogList";
function Blog() {
    const blogs = [
        {
            name: "Revolutionize Your Jenkins Workflow with Prometheus and Grafana Monitoring",
            img: monitoringImg,
            link: "https://medium.com/developer-student-clubs-tiet/revolutionize-your-jenkins-workflow-with-prometheus-and-grafana-monitoring-b01aa7c9152",
        },
        {
            name: "Microservice vs Monolithic vs Serverless.",
            img: arc,
            link: "https://medium.com/@jogeshgupta963/microservice-vs-monolithic-vs-serverless-a29a169bf8a8",
        },
        {
            name: "Streamlining Docker Builds with Caching, Compose, and Volumes.",
            img: dockerCompose,
            link: "https://medium.com/@jogeshgupta963/streamlining-docker-builds-with-caching-compose-and-volumes-a075dc904d01",
        },
        {
            name: "Docker Containers 101: A Beginner’s Guide",
            img: MobyLogo,
            link: "https://medium.com/@jogeshgupta963/docker-containers-101-a-beginners-guide-f96114014ee3",
        },
    ];
    return (
        <div name="blog" className={`w-full md:h-screen text-gray-300`}>
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
                {/* <div className="pb-8"> */}
                {/* <div> */}
                {/* <p className="text-4xl mb-5 font-bold inline border-b-4 text-center items-center justify-center mb-5  border-pink-600 ">
            Works
          </p> */}
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#3b82f6]">
                        Blogs
                    </p>
                </div>
                {/* grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-10 ">
                    {blogs.map((blogs) => (
                        <BlogList blogs={blogs} />
                    ))}
                </div>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Blog;
