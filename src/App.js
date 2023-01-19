import React from "react";

import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Footer } from "./layout/Footer";

export default class App extends React.Component {
    state = {
        moviesList: [],
    };

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=1051d63c&s=matrix")
            .then((response) => response.json())
            .then((data) => this.setState({ moviesList: data["Search"] }));
    }

    render() {
        return (
            <>
                <Header />
                <Main moviesList={this.state.moviesList} />
                <Footer />
            </>
        );
    }
}

// function App() {
//     return (
//         // This is the React.Fragment
//         <>
//             <Header />
//             <Main />
//             <Footer />
//         </>
//     );
// }

// export default App;
