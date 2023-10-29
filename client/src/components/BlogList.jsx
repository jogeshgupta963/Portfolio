import React from "react";

function BlogList({ blogs }) {
    return (
        <div
            style={{
                backgroundImage: `url(${blogs.img})`,
                backgroundSize: "cover",
            }}
            className="shadow-lg shadow-[#18181b] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
            {/* hover  */}
            <div className="opacity-0 group-hover:opacity-80">
                <span className="text-2xl mx-5 font-bold text-center text-white tracking-wider">
                    {blogs.name}
                </span>
                <br />
                <div className="pt-8 text-center">
                    <a href={blogs.link} target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                            Read
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BlogList;
