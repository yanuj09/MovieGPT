import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BGIMG } from "../utils/constants";


function GptSearch() {
  return (

    <>
    <div className="fixed -z-10">
      <img className="h-screen object-cover md:w-[100vw]" src= {BGIMG} alt="bgImg"></img>
    </div>

    <div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>

    </>
  )
}

export default GptSearch;