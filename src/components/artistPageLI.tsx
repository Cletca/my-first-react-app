import './artistPageLI.css';

// MUI Icons
import FavIcon from '@mui/icons-material/AddCircleOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { useState } from 'react';

interface ArtistPageLiProps {
    id: number;
    name: string;
    views: number;
    time: number;
}

function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function viewCount(num: number): string {
    return num.toLocaleString('en-US');
}

export default function ArtistPageLI({ id, name, views, time } : ArtistPageLiProps) {

    const [hover, setHover] = useState(false);

    return (
        <li
            className="artist-page-card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="card-container">
                <div className="card-header">
                    <span className="card-number">{hover ? <PlayArrowIcon /> : id}</span>
                    <img src="#" alt="#"/>
                    <span className="card-title">{name}</span>
                </div>
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