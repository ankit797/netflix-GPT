import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";

const usePopularMovies = () => {
     // Fetch data from Movie API and update Store
     const dispatch = useDispatch();

     const getusePopularMovies = async ()=>{
         const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
         const json = await data.json();
         dispatch(addPopularMovies(json.results))
     };
 
     useEffect(()=>{
         getusePopularMovies();
     },[])
};

export default usePopularMovies;