import { MPoster_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;

  
  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        alt="MOVIE POSTER"
        src={MPoster_URL + posterPath}
      ></img>
    </div>
  );
};

export default MovieCard;
