import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageContants";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";
//import client from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + encodeURIComponent(movie) + "&page=1",
      API_OPTIONS
    );
    const data = await res.json();

    //console.log(data);
    return data.results;
  };

  const handleGptSearchClick = async () => {
    //console.log(searchText.current.value);

    const gptMovies = ["Andaz Apna Apna", "Hera Pheri" , "Chupke Chupke" , "Chalti ka naam gaadi " , "Amar Akbar Anthony"];
    //console.log(gptMovies);

    // make an api call
    /*
    const gptQuery =
      "act as a movie recommendation system and suggest some movie for the query" +
      searchText.current.value +
      ". Only give name of five movie. comma sepearated like the example result given ahead.Example result:  Don, Puspa, KGF , 12th fail, Solay";

    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if(!gptResults.choices){
      //Todo error handling
    
    }
    console.log(gptResults.choices);
    
    const gptMovies = gptResults.choices?.[0]?.message?.content?.split(",");
    //["Andaz Apna Apna", "Hera Pheri" , "Chupke Chupke" , "Jane bhi do yaaro " , "Padoson"]

    const promiseArray = gptMovies.map((movies) => searchMovieTMDB(movie));
    //[promise, promise,promise,promise,promise]

    const tmdbResults = await promise.all(promiseArray);
    
    */

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    console.log(promiseArray);
    //[promise, promise,promise,promise,promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMoviesResult({movieName : gptMovies  ,movieResults :tmdbResults}));
  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className=" w-full  md:w-1/2  grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 my-4 ml-4 col-span-10 rounded-l-full shadow-lg "
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          className="py-2 px-4 h-[57px] mb-3 mt-4 bg-red-700 text-white rounded-r-full col-span-2 "
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
