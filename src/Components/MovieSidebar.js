import { Link } from "react-router-dom";
import '../App.css'


// MovieSideBar is receiving movieList as props which is mapped through to be displayed as a title clickable link for the user
const MovieSideBar = (props) => {

    return (
        <div className="movie-sidebar">
            <header className="movie-sidebar">
                <h2 >Movie Sidebar</h2>
                {props.movieList.map((movieItem, index) => {
                    return (
                        // this is making the movie title the link and then display the movie title
                        <Link key={index} to={`/movies/${movieItem.Title}`}>{movieItem.Title}</Link>
                    )
                })}
            </header>
        </div >
    )
}

export default MovieSideBar;