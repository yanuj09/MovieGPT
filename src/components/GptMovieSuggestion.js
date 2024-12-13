import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GptMovieSuggestion() {
  const { gptMoviesNames, movieResults } = useSelector((store) => store.gpt);
  if(!gptMoviesNames) return null;

  return( 
  <div className="p-4 m-4 bg-black text-white bg-opacity-85">

    {gptMoviesNames.map((movieName, index) => <MovieList key={movieName} title= {movieName} movies= {movieResults[index]} /> )}

    <MovieList title= {gptMoviesNames[1]} movies= {movieResults[1]} />
  
  </div>
  );
}

export default GptMovieSuggestion;
