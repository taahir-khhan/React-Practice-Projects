import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className='relative w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#0a0a0a]'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0a0a0a] via-[#1e1b4b] to-[#3b0764] opacity-90 animate-aurora'></div>

      <div className='absolute -top-16 left-12 w-24 h-24 bg-[#7c3aed] rounded-full opacity-40 blur-3xl animate-float'></div>
      <div className='absolute bottom-10 right-10 w-20 h-20 bg-[#9333ea] rounded-full opacity-30 blur-2xl animate-float delay-300'></div>

      <h1 className='text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl'>
        Build & Learn with <br />{" "}
        <span className='text-[#a78bfa] drop-shadow-lg'>
          Interactive React Projects 🚀
        </span>
      </h1>

      <p className='mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fadeIn'>
        Sharpen your React skills with hands-on practice & creative projects.
      </p>

      <div className='mt-6 px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-[#7c3aed] to-[#9333ea] hover:from-[#6d28d9] hover:to-[#7e22ce] rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 cursor-pointer'>
        Explore Projects in the Above
      </div>

      <div className='absolute top-1/3 left-1/4 w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full animate-pulse'></div>
      <div className='absolute bottom-1/4 right-1/5 w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full animate-pulse delay-200'></div>
    </div>
  );
}

export default Home;
