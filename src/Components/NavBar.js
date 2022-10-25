import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
            {/* these are the links on the nav bar and what they are linked to (to="") */}
            <Link to="/"> Home </Link>
            <Link to="/movies">Movie List</Link>
            <Link to="/movies/form">Movie Form</Link>
        </div>

    )
}

export default NavBar;