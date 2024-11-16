import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/model");
    };
    const [text] = useTypewriter({
      words: ["Music Recommender based on your mood.", "Let's get started!"],
      loop: {},
    });
  return (
    <div className="flex flex-col justify-center items-center p-[1.5rem]">
      <div className=" mb-[2.1875rem] flex justify-center items-center m-auto">
        <span className="text-[2rem] font-semibold m-1 text-center">
          {text}
        </span>
        <div className="hidden md:block">
          <Cursor cursorColor="white" />
        </div>
      </div>
      <button
        onClick={handleClick}
        className="px-5 py-2 border-none bg-white text-[#024361] rounded-md cursor-pointer mt-[1.25rem]"
      >
        Start
      </button>
    </div>
  );
}

export default Home