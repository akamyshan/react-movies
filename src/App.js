import React from "react";

import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Footer } from "./layout/Footer";

function App() {
    return (
        // This is the React.Fragment
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default App;
