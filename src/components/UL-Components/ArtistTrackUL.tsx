import './css/artistTrackUL.css'

import ArtistPageLI from "../liComponents/artistPageLI.tsx";

import {usePlayer} from "../../playerContext.tsx";
import {useArtistData} from "../../artistProvider.tsx";

import { useState } from "react";

export default function ArtistTrackUL() {
    const { setCurrentTrack, setCurrentPlaylist } = usePlayer();
    const { artistSongs } = useArtistData();
    const [ visibleTracks, setVisibleTracks ] = useState(5);

    const showMoreTracks = () => {
        setVisibleTracks((prev) => prev + 5);
        console.log("Visible Tracks:", visibleTracks + 5);
    }
    const hideMoreTracks = () => {
        setVisibleTracks((prev) => prev - 5);
        console.log("Visible Tracks:", visibleTracks - 5);
    }


    return (
        <div className="trackUL-container">
            <ul className="artist-page-trackUL">
            {artistSongs.slice(0, visibleTracks).map((track, index) => (
                    <ArtistPageLI
                        key={track.id}
                        id={index + 1}
                        name={track.name}
                        views={track.views}
                        time={track.time}
                        image={track.image}
                        src={track.src}
                        onClick={() => {
                            setCurrentPlaylist(artistSongs);
                            setCurrentTrack({
                                id: track.id,
                                name: track.name,
                                image: track.image,
                                src: track.src,
                            });
                        }}
                    />
            ))}
            </ul>

            {visibleTracks < artistSongs.length && (
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
    )
}