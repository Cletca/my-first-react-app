import './artistTrackUL.css'

import ArtistPageLI from "./artistPageLI.tsx";

import {WeekndSongs} from "../data/artistsTracks/theWeeknd/weekndSongs.ts";

export default function ArtistTrackUL() {

     const list = WeekndSongs;

    return (
        <div className="trackUL-container">
            <ul className="artist-page-trackUL">
            {list.map((track, index) => (
                    <ArtistPageLI
                        key={track.id}
                        id={index + 1}
                        name={track.name}
                        views={track.views}
                        time={track.time}
                        image={track.image}
                        src={track.src}
                    />
            ))}
            </ul>
        </div>
    )
}