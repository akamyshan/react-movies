import React from "react";

class Search extends React.Component {
    state = {
        search: "matrix",
        type: "all",
    };

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        const { search, type } = this.state;

        return (
            <>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            className="validate"
                            placeholder="Search"
                            type="search"
                            value={search}
                            onChange={(event) =>
                                this.setState({ search: event.target.value })
                            }
                            onKeyDown={this.handleKey}
                        />
                        <button
                            className="btn search-btn"
                            onClick={() =>
                                this.props.searchMovies(search, type)
                            }
                        >
                            Search
                        </button>
                    </div>
                </div>
                <form className="type-form">
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === "all"}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === "movie"}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === "series"}
                        />
                        <span>Series only</span>
                    </label>
                </form>
            </>
        );
    }
}

export { Search };
