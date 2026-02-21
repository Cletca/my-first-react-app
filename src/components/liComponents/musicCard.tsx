import './css/musicCard.css';

// MUI
import { Button } from "@mui/material";

// Context
import {useArtistData} from "../../artistProvider.tsx";
import {NavigationContext} from "../../navigationContext.tsx";

// Hooks
import { useContext } from "react";

// Other
import {artists} from "../../data/artists.ts";
import {artistsSongsMap} from "../../data/artistsSongs.ts";

export interface MusicCardProps {
    image: string;
    name: string;
    author: string;
    views: string;
    onClick: () => void;
}

export default function MusicCard({ image, name, author, views, onClick}: MusicCardProps) {

    const artistContext = useArtistData();
    const navContext = useContext(NavigationContext);

    if (!artistContext || !navContext) return null;

    const { setArtistData, setArtistSongs } = artistContext;
    const { setCurrentPage } = navContext;

    const handleClick = (event) => {
        event.stopPropagation();

        const artist = artists.find(e => e.name === author);
        const artistSongs = artistsSongsMap[author as keyof typeof artistsSongsMap] || [];

        if (artist) {
            setArtistData({
                name: artist.name,
                subs: artist.subs,
                img: artist.image,
            });
            setArtistSongs(artistSongs);
            setCurrentPage("artist");
        } else {
            console.error("Unable to find artist");
        }
    }

    return (
        <div className="music-card-container" onClick={onClick} role="button" tabIndex={0}>

            <div className="music-card-img">
                <img src={image} alt="Photo" />
            </div>

            <div className="music-card-description">

                <div className="track-name-container">
                    <p className="track-name">
                        {name}
                    </p>
                </div>

                <div className="track-description">
                    <Button variant="text" sx={{
                        position: "relative",
                        color: 'gray',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        zIndex: '2',
                    }}
                            onClick={handleClick}
                    >
                        {author}
                    </Button>

                    <span className="number-of-views">
                        {views}
                    </span>
                </div>

            </div>

        </div>
    )
}