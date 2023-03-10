import React from "react";

import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    searchMovies = (search = "matrix", type = "all") => {
        this.setState({ loading: true });
        if (search === "") {
            search = "matrix";
        }
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((error) => {
                console.error(error);
                this.setState({ loading: false });
            });
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
