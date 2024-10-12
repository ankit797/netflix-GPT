import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addTopRated } from "../Utils/movieSlice";

const useTopRated = () => {
     // Fetch data from Movie API and update Store
     const dispatch = useDispatch();

     const getuseTopRated = async ()=>{
         const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
         const json = await data.json();
         dispatch(addTopRated(json.results))
     };
 
     useEffect(()=>{
         getuseTopRated();
     },[])
};

export default useTopRated;