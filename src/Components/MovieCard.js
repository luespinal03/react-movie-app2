
const MovieCard = (props) => {
    return (
        // this is creating the individual movie cards for each movie
        <div className="movie-list-card">
            <img src={props.movie.Images[0]}></img>
            <h2 className="movie-list-card-title">{props.movie.Title}</h2>
            <p>{props.movie.Director}</p>
        </div>
    )
}

export default MovieCard;