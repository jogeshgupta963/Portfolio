import React from 'react'

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen flex text-center justify-center items-center p-4"
    >
      <form className="flex flex-col max-w-[600px] ">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-[#3b82f6] text-gray-300 "
            style={{
              textAlign: 'center',
            }}
          >
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Happy to help or collaborate on any project.Do reach me out
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-4 rounded-xl shadow-lg"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-4 bg-[#ccd6f6] rounded-xl outline-none shadow-lg"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="message"
          rows="10"
          className="bg-[#ccd6f6] text-black text-bold p-4 rounded-xl outline-none shadow-lg"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#3b82f6] hover:border-[#3b82f6] px-4 py-3 my-8 mx-auto flex items ">
          Let's Connect
        </button>
      </form>
    </div>
  )
}

export default Contact
