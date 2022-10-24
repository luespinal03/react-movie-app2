import { useParams } from "react-router-dom";

// movieList is being passed in as props here REMEMBER
const MoviePage = (props) => {

    // this is going to grab the title from the url the user is currently clicking on
    const params = useParams();
    const titleParam = params.title;

    // for .find you only want to return true when you find the item you are looking for
    const foundMovie = props.movieList.find((movieItem) => {
        if (movieItem.Title === titleParam) {
            return true;
        }
    })

    console.log(foundMovie)

    //  show me the movie i was looking
    return (
        <div>
            <h1>Movie Page</h1>
            <h2>{foundMovie.Title}</h2>
            <p>{foundMovie.Director}</p>
            <p>{foundMovie.Actors}</p>
            <p>{foundMovie.Plot}</p>
        </div>
    )
}

export default MoviePage;