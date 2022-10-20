import MovieCard from "../Components/MovieCard";


const MovieListPage = (props) => {
    console.log(props.movieList)
    return (
        <div>
            <h1>Movie List Page</h1>
            <div className="movie-list">
                {props.movieList.map((movie, index) => {
                    return (
                        // returning each movie to the <MovieCard/> component
                        <MovieCard movie={movie} />
                    )
                })}
            </div>

        </div>
    )
}

export default MovieListPage;