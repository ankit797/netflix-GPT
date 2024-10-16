import MovieCard from "./MovieCards";

const MovieList = ({title, movies}) =>{

    return(
        movies && (
            <div className="px-6 py-4">
            <h1 className="text-3xl py-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hidden">
                <div className="flex">
                    {movies.map(movie => <MovieCard key={movie.id} posterPath={movie?.poster_path}/>)}
                </div>
            </div>
        </div>
        )
    );
};

export default MovieList;