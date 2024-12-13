import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{


    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

    const getNowPlayingMovie = async () =>{

        const res = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1" , API_OPTIONS);

        const data = await res.json();

        //console.log(data);
        dispatch(addUpcomingMovies(data.results));
        

    }

    useEffect( () =>{
        !upcomingMovies && getNowPlayingMovie();
    }, []);
}

export default useUpcomingMovies;