import { useParams } from "react-router-dom";

// movieList is being passed in as props here REMEMBER
const MoviePage = (props) => {
    console.log(props);
    // useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path> 
    const params = useParams();
    const titleParam = params.title;

    // for .find you only want to return true when you find the item you are looking for
    // if the title clicked matches one of the titles we have in our array return true
    // code below is getting a title put as the value of foundMovie
    // find the right movie and store it in foundMovie variable
    const foundMovie = props.movieList.find((movieItem) => {
        return movieItem.Title === titleParam
    })

    // if foundMovie.Title === params.title return this
    // use the movie we stored in foundMovie variable and display its parameters and values
    if (foundMovie.Title === params.title) {
        return (
            <div>
                <h1>Movie Page</h1>
                <h2>Title: {foundMovie.Title}</h2>
                <p>Year: {foundMovie.Year}</p>
                <p>Director: {foundMovie.Director}</p>
                <p>Rated: {foundMovie.Rated}</p>
                <p>Release: {foundMovie.Release}</p>
            </div>
        )
    }
}

export default MoviePage;