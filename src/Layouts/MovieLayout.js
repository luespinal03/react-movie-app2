import MovieSideBar from "../Components/MovieSidebar"
import { Outlet } from 'react-router-dom';

const MoiveLayout = (props) => {
    return (
        <div className="movie-layout">
            <MovieSideBar movieList={props.movieList} />
            <div className="movie-content">
                <Outlet />
            </div>
        </div>
    )
}

export default MoiveLayout;