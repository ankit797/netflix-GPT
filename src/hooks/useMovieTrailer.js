import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    // fetch Trailer
    const getMovieVideos = async (movieId)=> {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();

        // filter trailers 
        const filterData = json.results.filter((video)=> video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
        getMovieVideos(movieId);
    },[])
};

export default useMovieTrailer;