import { Link } from "react-router-dom";
import '../App.css'


// MovieSideBar is recieving movieList as props which is mapped through to be displayed as a title clickable link for the user
const MovieSideBar = (props) => {

    return (
        <div className="movie-sidebar">
            <h2 className="movie-sidebar">Movie Sidebar</h2>
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