import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BGIMG } from "../utils/constants";


function GptSearch() {
  return (
    <div>
        <div className="fixed -z-10">
                <img src= {BGIMG} 
                alt="bgImg"
                ></img>

        </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch;