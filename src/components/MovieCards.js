import { IMG_CDN_URL } from "../Utils/constant";

const MovieCard = ({posterPath}) =>{

    return(
        <div className="w-40 pr-4 rounded-sm">
            <img alt="Movie card" src={IMG_CDN_URL + posterPath} />
        </div>
    );
};

export default MovieCard;