import { Movie } from "./Movie";

function Movies(props) {
    return (
        <div className="movies">
            {props.moviesList.map((movie) => (
                <Movie
                    title={movie.Title}
                    type={movie.Type}
                    year={movie.Year}
                    poster={movie.Poster}
                />
            ))}
        </div>
    );
}

export { Movies };
