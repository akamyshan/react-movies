import { Movies } from "../components/Movies";

function Main(props) {
    return (
        <main className="container content">
            <Movies moviesList={props.moviesList} />
        </main>
    );
}

export { Main };
