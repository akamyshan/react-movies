import React from "react";

import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    searchMovies = (search = "matrix", type = "all") => {
        this.setState({ loading: true });
        fetch(
            `http://www.omdbapi.com/?apikey=1051d63c&s=${search}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    };

    componentDidMount() {
        this.searchMovies("matrix", "all");
    }

    render() {
        const { movies, loading } = this.state;
        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

export { Main };
