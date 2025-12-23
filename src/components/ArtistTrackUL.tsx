import './artistTrackUL.css'

import ArtistPageLI from "./artistPageLI.tsx";

export default function ArtistTrackUL() {

     const list = [
        {
            id: 1,
            name: "Track name",
            views: 1458938,
            time: 203,
        },
         {
             id: 1,
             name: "Track name",
             views: 1458938,
             time: 203,
         },
         {
             id: 1,
             name: "Track name",
             views: 1458938,
             time: 203,
         },
         {
             id: 1,
             name: "Track name",
             views: 1458938,
             time: 203,
         },
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
            {list.map((track, index) => (
                    <ArtistPageLI
                        key={track.id}
                        id={index + 1}
                        name={track.name}
                        views={track.views}
                        time={track.time}
                    />
            ))}
            </ul>
        </div>
    )
}