import React from "react";

class Filter extends React.Component {
    state = {
        type: "",
    };
    render() {
        const { type } = this.state;

        return (
            <form className="filter-form">
                <label>
                    <input
                        className="with-gap"
                        name="filter"
                        type="radio"
                        value="all"
                        onChange={(event) => {
                            this.setState({ type: event.target.value });
                            this.props.searchMovies("superman", type);
                        }}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="filter"
                        type="radio"
                        value="movie"
                        onChange={(event) =>
                            this.setState({ type: event.target.value })
                        }
                    />
                    <span>Movie</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="filter"
                        type="radio"
                        value="series"
                        onChange={(event) =>
                            this.setState({ type: event.target.value })
                        }
                    />
                    <span>Series</span>
                </label>
            </form>
        );
    }
}

export { Filter };
