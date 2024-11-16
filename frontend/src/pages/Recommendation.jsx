import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ytlogo from "../assets/youtubelogo.png"
import spotifylogo from "../assets/Spotify_Logo_CMYK_Green.png"
import { useOutput } from '../context/ModelOutputContext.jsx'


const Recommendation = () => {
  const navigate =  useNavigate();
  const {songName,mood,songArtist} = useOutput(); // data from context api
  useEffect(()=>{
    if (songName === "songname" || mood === "Happy") {
      navigate("/model");
    }
  },[])
  const ytQuery= `${songName} of ${songArtist}`
  const spotifyQuery = `${songName} of ${songArtist}`;
  const youtubelink = `https://www.youtube.com/results?search_query=${ytQuery}`;
  const spotifylink = `https://open.spotify.com/search/${spotifyQuery}`;
  return (
    <div className=" font-medium">
      <div className="flex flex-col justify-center item-center p-[1.25rem]">
        <h1 className="text-3xl">Your Mood: {mood}</h1>
      </div>
      <div className="flex flex-col justify-center  p-[1.25rem]">
        <h3 className="text-xl">Recommended Song: {songName}</h3>
        <h3 className="text-xl">Author Name: {songArtist}</h3>
        <div className="mt-9 flex">
          <a
            className="mr-3 px-5 py-3 bg-white rounded-full w-1/2 flex justify-center items-center hover:cursor-pointer"
            href={youtubelink}
          >
            <img src={ytlogo} alt="yt logo" className="h-4" />
          </a>

          <a
            className="ml-3 px-5 py-3 bg-white rounded-full w-1/2 flex justify-center items-center hover:cursor-pointer"
            href={spotifylink}
          >
            <img src={spotifylogo} alt="yt logo" className="h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Recommendation