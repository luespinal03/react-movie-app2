import { Link } from "react-router-dom";

const MovieSideBar = (props) => {

    //  <Link to="/"> Home </Link>

    return (
        <div classname="movie-sidebar">
            <h2>Movie Sidebar</h2>
            {props.movieList.map((movieItem, index) => {
                return (
                    // this is making th emovie title the link and then display the movie title
                    <Link to={`/movies/${movieItem.Title}`}>{movieItem.Title}</Link>
                )
            })}
        </div >
    )
}

export default MovieSideBar;