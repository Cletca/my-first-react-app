import "./css/albumCard.css";

// HOOKS
import { useContext } from "react";

// CONTEXT
import { NavigationContext } from "../../navigationContext.tsx";
import { usePlaylist } from "../../playlistContext.tsx";

// Songs Map
import { albumTracksMap } from "../../data/playlistMap.ts";

export default function AlbumCard({ image, name, artists, genre, views }) {
    const navContext = useContext(NavigationContext);
    const { setAlbumData, setPlaylist } = usePlaylist();

    if (!navContext) return null;

    const { setCurrentPage } = navContext;

    function cardHandleClick() {

        const currentTracks = albumTracksMap[name] || [];

        setAlbumData({
            img: image,
            name: name,
            views: views,
        });

        setPlaylist(currentTracks);
        setCurrentPage("playlist");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div
            className="album-card"
            onClick={() => {cardHandleClick()}}
        >
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