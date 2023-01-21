import React from "react";

class Search extends React.Component {
    state = {
        search: "",
    };

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search);
        }
    };

    render() {
        const { search } = this.state;

        return (
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
                        onClick={() => this.props.searchMovies(search)}
                    >
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

export { Search };
