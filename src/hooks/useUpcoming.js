import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../Utils/movieSlice";

const useUpcoming = () => {
     // Fetch data from Movie API and update Store
     const dispatch = useDispatch();

     const getuseUpcoming = async ()=>{
         const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
         const json = await data.json();
         dispatch(addUpcoming(json.results))
     };
 
     useEffect(()=>{
         getuseUpcoming();
     },[])
};

export default useUpcoming;