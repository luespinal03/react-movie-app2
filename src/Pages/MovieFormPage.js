import { useState } from 'react';
import "./MovieFormPage.css"

const MovieFormPage = (props) => {
    console.log(props)

    // line of code below represents the parameters of handleAddMovie (title, year, rated, release). This line of code brings in all the props in at the same time in one line of code
    const { handleAddMovie } = props;
    console.log({ handleAddMovie }) // returns title, year, rated, release

    // reseting parameters that we are using, giving them an empty value so it can be changed by e.target.value on the code below inside the return.
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [director, setDirector] = useState('');
    const [rated, setRated] = useState('');
    const [release, setRelease] = useState('');

    return (
        <div>
            <h1>Movie Form Page</h1>

            {/* onChange is listening for any event inside the input box that changes its current status. When it happens it will grab that event.target.value (look for it on browser console) and use that information to replace the previous information that was established by the useState original parameter (title, year, rated, release) */}
            <label>Title: </label>
            <input type="text" value={title} placeholder="" onChange={(e) => { setTitle(e.target.value) }} className="movie-form-input"></input>
            <br />

            <label>Year: </label>
            <input type="number" value={year} placeholder="" onChange={(e) => { setYear(e.target.value) }} className="movie-form-input"></input>
            <br />

            <label>Director: </label>
            <input type="text" value={director} placeholder="" onChange={(e) => { setDirector(e.target.value) }} className="movie-form-input"></input>
            <br />

            <label>Rated: </label>
            <input type="number" value={rated} placeholder="" onChange={(e) => { setRated(e.target.value) }} className="movie-form-input"></input>
            <br />

            <label>Release: </label>
            <input type="number" value={release} placeholder="" onChange={(e) => { setRelease(e.target.value) }} className="movie-form-input"></input>
            <br />
            <br />

            {/*  on click pass these values that have been updated by the code above back to handleAddMovie to create new movie */}
            <button onClick={() => {
                handleAddMovie(title, year, director, rated, release)
            }}>Add Movie</button>
        </div>
    )
}

export default MovieFormPage;