import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import { useOutput } from "../context/ModelOutputContext";
import axios from "axios"


const Model = () => {
  const [thought, setThought] = useState("");
  const navigate = useNavigate();
  const { setSongName, setMood, setSongArtist } = useOutput(); // context-api data
  
  const handleSubmit = async() => {
    console.log(thought);
    // TODO: call api here on submission and do changes in songname and mood using setSongName(), setMood()
    const data= await axios.post("http://127.0.0.1:8000/review",{thought});
    console.log(data.data);
    setMood(data.data.emotion);
    setSongName(data.data.song["Song Name"]);
    setSongArtist(data.data.song["Artist Name"]);
    navigate("/result");
  };

  //for typewriting effect
  const [text] = useTypewriter({
    words: ["What's on your mind?..."],
    loop: {},
  });

  return (
    <div className="flex flex-col justify-center items-center bg-white p-[1.25rem] m-auto rounded-lg shadow-md w-[80%] md:w-full">
      <textarea
        name="thought"
        id="thought"
        cols="50"
        rows="7"
        placeholder={text}
        onChange={(e) => setThought(e.target.value)}
        className="font-medium border-none p-[1.25rem] m-[1.25rem] resize-none focus:outline-none w-full text-black"
      />
      <button
        onClick={handleSubmit}
        className="font-semibold px-5 py-2 m-[1.25rem] border-none bg-[#024361] rounded-md cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
};

export default Model;
