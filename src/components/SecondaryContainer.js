import { useSelector } from "react-redux";
import MovieList from "./MovieList";
/*
 MovieList - popular
  movie Card *n
 MovieList - nowplaying
 MovieList - Horror
 MovieList - Drama
 MovieList - Tv series

*/




const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  
  
  return ( (  movies.nowPlayingMovies &&movies.topRatedMovies && movies.popularMovies && movies.upcomingMovies) 
  && (
    <div className="bg-black" >

      <div className="mt-0 md:-mt-52 pl-3 md:pl-12 relative z-20 ">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming movie"} movies={movies.upcomingMovies}/>
      
      </div>
      
    </div>
  ))
}

export default SecondaryContainer;