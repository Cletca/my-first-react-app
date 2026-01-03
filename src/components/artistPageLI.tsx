import './artistPageLI.css';

// MUI Icons
import FavIcon from '@mui/icons-material/AddCircleOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// Hooks
import { useState } from 'react';
// Context
import { usePlayer } from "../playerContext.tsx";

interface ArtistPageLiProps {
    id: number;
    name: string;
    image: string;
    views: number;
    time: number;
    src: string;
}

function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function viewCount(num: number): string {
    return num.toLocaleString('en-US');
}



export default function ArtistPageLI({ id, name, image, views, time, src } : ArtistPageLiProps) {

    const [hover, setHover] = useState(false);
    const { setCurrentTrack } = usePlayer();

    function liHandleClick() {
        setCurrentTrack({
            id: id,
            name: name,
            image: image,
            src: src
        });
    }

    return (
        <li
            className="artist-page-card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={liHandleClick}
        >
            <div className="card-container">
                <div className="card-header">
                    <span className="card-number">{hover ? <PlayArrowIcon /> : id}</span>
                    <img src={image} alt="#"/>
                </div>
                <span className="card-title">{name}</span>
                <div className="card-content">
                    <div className="card-name-views">
                        <span className="card-views">{viewCount(views)}</span>
                    </div>
                    <div className="card-btns">
                        <button className={`fav-btn ${hover ? "visible" : ""}`}> <FavIcon /> </button>
                        <span className="song-time">{formatTime(time)}</span>
                        <button className={`song-options ${hover ? "visible" : ""}`}>⋯</button>
                    </div>
                </div>
            </div>
        </li>
    )
}