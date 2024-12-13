import { useSelector } from "react-redux"
import VedioTitle from "./VedioTitle";
import VedioBackground from "./VedioBackground";


const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  
    if (!movies) {
        
        return ; // Prevent further execution if movies is not yet available
    }

  
    const mainMovie = movies[0];
    //console.log( mainMovie);

    const {original_title, overview,id} = mainMovie;



  return (
    <div className="pt-[35%] bg-black md:pt-0">
        <VedioTitle  title = {original_title} overview = {overview} />
        <VedioBackground movieId = {id} />
    </div>
  )
}

export default MainContainer;