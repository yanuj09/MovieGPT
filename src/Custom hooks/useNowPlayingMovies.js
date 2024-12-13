import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS, PLAYING_MOVIE } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () =>{


    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getNowPlayingMovie = async () =>{

        const res = await fetch(PLAYING_MOVIE , API_OPTIONS);

        const data = await res.json();

        //console.log(data);
        dispatch(addNowPlayingMovies(data.results));
        

    }

    useEffect( () =>{
        !nowPlayingMovies && getNowPlayingMovie();
    }, []);
}

export default useNowPlayingMovies;