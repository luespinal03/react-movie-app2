
const MovieCard = (props) => {
    return (
        <div className="movie-list-card">
            <h2 className="movie-list-card-title">{props.movie.Title}</h2>
            <p>{props.movie.Director}</p>
        </div>
    )
}

export default MovieCard;