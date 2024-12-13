import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVedio } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch(); // dispatching the trailer vedio
    const trailerVedio = useSelector(store => store.movies.trailerVedio)
   
  
  // api call to get he movie vedio
  const getMovieVideos = async () => {

    

    const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+ movieId + "/videos",
      API_OPTIONS
    );

    const json = await data.json();
    //console.log(json);

    const filterData = json.results.filter((movie) => movie.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    //console.log(trailer);
    dispatch(addTrailerVedio(trailer));
    
  };

  useEffect(() => {
    !trailerVedio && getMovieVideos();
  }, []);



};

export default useMovieTrailer;



