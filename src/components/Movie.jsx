function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;
    return (
        <div id={id} className="card movie">
            <div className="card-image">
                {poster === "N/A" ? (
                    <img
                        src={`https://via.placeholder.com/300x450?text=${title}`}
                    />
                ) : (
                    <img src={poster} />
                )}
            </div>
            <div className="card-content">
                <h4 className="card-title">{title}</h4>
                <p>
                    {type} <span className="right">{year}</span>
                </p>
            </div>
        </div>
    );
}

export { Movie };
