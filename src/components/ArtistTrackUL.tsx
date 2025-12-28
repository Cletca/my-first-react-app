import './artistTrackUL.css'

import ArtistPageLI from "./artistPageLI.tsx";

export default function ArtistTrackUL() {

     const list = [
        {
            id: 1,
            name: "Track name",
            views: 1424522,
            time: 201,
        },
         {
             id: 2,
             name: "Track name",
             views: 145426,
             time: 573,
         },
         {
             id: 3,
             name: "Track name",
             views: 1427348,
             time: 179,
         },
         {
             id: 4,
             name: "Track name",
             views: 1458938,
             time: 203,
         },
         {
             id: 5,
             name: "Track name",
             views: 14554738,
             time: 223,
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