function Movie(props) {
    const { title, type, year, poster } = props;
    return (
        <div className="card movie">
            <div className="card-image">
                <img src={poster}></img>
                <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
                <p>
                    {type}
                    <br></br>
                    {year}
                </p>
            </div>
            <div className="card-action">
                <a href="#">This is a link</a>
            </div>
        </div>
    );
}

export { Movie };
