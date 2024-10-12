import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () =>{

    const movies = useSelector((store) => store.movies);

    return(
        movies && (
            <div className="bg-black">
                <div className="-mt-52 px-6 relative z-20">
                    <MovieList title="Now Playing" movies={movies?.nowPlayingMovies}/>
                    <MovieList title="Top Rated" movies={movies?.topRated}/>
                    <MovieList title="Popular" movies={movies?.popularMovies}/>
                    <MovieList title="Upcoming" movies={movies?.upcoming}/>
                </div>
            </div>
        )
    );
};

export default SecondaryContainer;