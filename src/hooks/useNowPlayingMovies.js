import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayngMovies } from "../Utils/movieSlice";

const useNowPlayingMovies = () => {
     // Fetch data from Movie API and update Store
     const dispatch = useDispatch();

     const getNowPlayingMovies = async ()=>{
         const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US?page=1', API_OPTIONS)
         const json = await data.json();
         dispatch(addNowPlayngMovies(json.results))
     };
 
     useEffect(()=>{
         getNowPlayingMovies();
     },[])
};

export default useNowPlayingMovies;