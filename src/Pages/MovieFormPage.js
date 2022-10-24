import { useState } from 'react';
import "./MovieFormPage.css"

const MovieFormPage = (props) => {
    console.log(props)
    const { handleAddMovie } = props;
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [rated, setRated] = useState('');
    const [release, setRelease] = useState('');

    return (
        <div>
            <h1>Movie Form Page</h1>
            <label>Title: </label>
            <input type="text" value={title} placeholder="" onChange={(e) => { setTitle(e.target.value) }} className="movie-form-input"></input>
            <br />

            <label>Year: </label>
            <input type="text" value={year} placeholder="" onChange={(e) => { setYear(e.target.value) }} className="movie-form-input"></input>
            <br />

            <label>Rated: </label>
            <input type="text" value={rated} placeholder="" onChange={(e) => { setRated(e.target.value) }} className="movie-form-input"></input>
            <br />

            <label>Release: </label>
            <input type="text" value={release} placeholder="" onChange={(e) => { setRelease(e.target.value) }} className="movie-form-input"></input>
            <br />
            <br />





            <button onClick={() => {
                handleAddMovie(title)
            }}>Add Movie</button>
        </div>
    )
}

export default MovieFormPage;