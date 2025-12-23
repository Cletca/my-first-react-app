import "./albumCard.css";

export default function AlbumCard({ image, name, artists, genre }) {

    return (
        <div className="album-card">
            <div className="album-card-top">
                <img className="album-image" src={image} alt="#"/>
            </div>
            <div className="album-card-bottom">
                <span className="album-title">{name}</span>
                <span className="album-artists">{artists}</span>
                <span className="album-genre">{genre}</span>
            </div>
        </div>
    );
}