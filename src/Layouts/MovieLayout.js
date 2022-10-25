import MovieSideBar from "../Components/MovieSidebar"
import { Outlet } from 'react-router-dom';

// here MovieLayout is recieving movieList through props which is then being passed into MovieSideBar as a props
const MovieLayout = (props) => {
    return (
        <div className="movie-layout">
            <MovieSideBar movieList={props.movieList} />
            <div className="movie-content">
                <Outlet />
            </div>
        </div>
    )
}

export default MovieLayout;