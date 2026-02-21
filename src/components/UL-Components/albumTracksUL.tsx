import './css/albumTracksUL.css';

// TEST
import ArtistPageLI from "../liComponents/artistPageLI.tsx";

// CONTEXT
import { usePlayer } from "../../playerContext.tsx";
import { usePlaylist } from "../../playlistContext.tsx";
import { NavigationContext } from "../../navigationContext.tsx";

// HOOKS
import {useState, useContext} from "react";

interface Track {
    id: number;
    name: string;
    image: string;
    views: number;
    time: number;
    src: string;
}

export default function TrackList() {

    const navContext = useContext(NavigationContext);

    if (!navContext) return null;

    const { setCurrentPage } = navContext;
    const { setCurrentTrack, setCurrentPlaylist } = usePlayer();
    const { playlist } = usePlaylist();

    const [ visibleTracks, setVisibleTracks ] = useState(5);

    const showMoreTracks = () => {
        setVisibleTracks((prev) => prev + 5);
        console.log("Visible Tracks:", visibleTracks + 5);
    }
    const hideMoreTracks = () => {
        setVisibleTracks((prev) => prev - 5);
        console.log("Visible Tracks:", visibleTracks - 5);
    }

    function cardHandleClick(track: Track) {


        setCurrentPage("playlist");
        setCurrentPlaylist(playlist);
        setCurrentTrack({
            id: track.id,
            name: track.name,
            image: track.image,
            src: track.src,
        });
    }

    return (
        <div className="trackUL-container">
            <ul className="artist-page-trackUL">
                {playlist.slice(0, visibleTracks).map((track, index) => (
                    <ArtistPageLI
                        key={track.id}
                        id={index + 1}
                        name={track.name}
                        views={track.views}
                        time={track.time}
                        image={track.image}
                        src={track.src}
                        onClick={() => {cardHandleClick(track)}}
                    />
                ))}
            </ul>

            {visibleTracks < playlist.length && (
                <button onClick={showMoreTracks} className="see-more-btn">
                    See more
                </button>
            )}

            {visibleTracks > 5 && (
                <button onClick={hideMoreTracks} className="see-more-btn">
                    See less
                </button>
            )}
        </div>
    );
}