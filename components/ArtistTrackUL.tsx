import './artistAvatarUL.css';

import React from 'react';

import ArtistPageLI from "./artistPageLI";

export default function ArtistTrackUL() {

     const list = [
        {
            id: 1,
            name: "Track name",
            views: 1458938,
            time: 203,
        }
    ];

    return (
        <div className="trackUL-container">
            <ul className="artist-page-trackUL">
            {list.map((track) => (
                    <ArtistPageLI
                        key={track.id}
                        id={track.id}
                        name={track.name}
                        views={track.views}
                        time={track.time}
                    />
            ))}
            </ul>
        </div>
    )
}