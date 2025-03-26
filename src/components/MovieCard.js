import { MPoster_URL } from "../utils/constants";



const MovieCard = ({ posterPath,index }) => {
  if(!posterPath) return null;

 

  
  return (
    <div className="w-36 md:w-48 pr-4 transform transition-transform duration-500 hover:scale-110">
      <img
         
        alt="MOVIE POSTER"
        src={MPoster_URL + posterPath}
      ></img> 
    </div>
  );
};

export default MovieCard;
